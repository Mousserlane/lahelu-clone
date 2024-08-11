import { useState, type FC } from "react"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Checkbox from 'expo-checkbox'
import { Pill, ThemedText, ThemedView } from "@/components"
import { SpecialTags } from "@/constants/Tags"
import { InputGroup } from "./components/InputGroup"
import { ImageUploader } from "./components/ImageUploader"
import { useGlobalStore } from "@/app/stores"
import { Post } from "./types"
import { User } from "../User"
import { useNavigation } from "expo-router"

interface ICreatePostProps { }

type FormKey = keyof Pick<Post, "title" | "isSensitive" | "isSiteCompliant"> | "tag"
type FormData = {
  [key in FormKey]: string | boolean | null;
}

const CreatePost: FC<ICreatePostProps> = () => {
  const { setPost } = useGlobalStore();
  const navigation = useNavigation()
  const [isSpecialTagExpanded, setIsSpecialTagExpanded] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([])
  const [formData, setFormData] = useState<FormData>({
    tag: null,
    title: null,
    isSensitive: false,
    isSiteCompliant: false,
  });
  const [image, setImage] = useState<string>()

  const handleOnChange = (value: string | boolean, name: FormKey) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmitTag = () => {
    if (Boolean(formData.tag)) {
      addTag(formData.tag as string)
      handleOnChange("", "tag")
    }
  }

  const addTag = (tag: string) => {
    setTags(prevTags => [...prevTags, tag])
  }

  const removeTags = (indexTarget: number) => {
    const newTags = [
      ...tags.slice(0, indexTarget),
      ...tags.slice(indexTarget + 1, tags.length)
    ]

    setTags(newTags)
  }

  const toggleSpecialTags = () => {
    setIsSpecialTagExpanded(prevState => !prevState)
  }

  const createPost = () => {
    const dummyUser: User = {
      avatarURL: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/05/25/ojan-skestajpg-20210525112130.jpg",
      username: "ojan_hypnosis"
    }
    // Should be named as Post
    const post: Post = {
      author: dummyUser,
      title: formData.title as string,
      tags,
      fileURL: image!,
      isSensitive: formData.isSensitive as boolean,
      isSiteCompliant: formData.isSiteCompliant as boolean,
    }
    setPost(post)
    navigation.goBack()
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.header}>
          <MaterialCommunityIcons name="image" size={24} />
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>Buat Meme</ThemedText>
        </ThemedView>
        <ThemedView style={{ width: '100%', borderWidth: StyleSheet.hairlineWidth, marginBottom: 8 }} />
        <ImageUploader onUploadSuccess={(file) => { setImage(file) }} />
        <InputGroup
          name="title"
          title="Judul"
          placeholder="Tulis judul lucu dan singkat"
          onChange={(val, name) => handleOnChange(val, name as FormKey)}
          value={formData.title}
        />
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Pill key={`${tag}-${index}`}>
              <TouchableOpacity onPress={() => removeTags(index)}>
                <MaterialCommunityIcons name="close" size={12} />
              </TouchableOpacity>
              <ThemedText type="smallBold" style={{ marginLeft: 4 }}>{tag}</ThemedText>
            </Pill>
          ))}
        </View>
        <InputGroup
          name="tag"
          title="Tag"
          placeholder="kocak, makanan, omg"
          onChange={(val, name) => handleOnChange(val, name as FormKey)}
          value={formData.tag}
          onSubmit={onSubmitTag}
        />
        <View>
          <TouchableOpacity onPress={toggleSpecialTags}>
            <Text style={styles.specialTagButton}>
              {isSpecialTagExpanded ? 'Tutup' : 'Lihat'} tag spesial
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagsContainer}>
          {isSpecialTagExpanded && SpecialTags.map((tag, index) => (
            <Pill key={`${tag}-${index}`}>
              <TouchableOpacity onPress={() => addTag(tag)}>
                <ThemedText type="smallBold">
                  {tag}
                </ThemedText>
              </TouchableOpacity>
            </Pill>
          ))}
        </View>

        <ThemedView style={[styles.checkboxGroup, { marginVertical: 16 }]}>
          <ThemedText>Sensitif</ThemedText>
          <Checkbox
            value={formData.isSensitive as boolean}
            onValueChange={(val) => handleOnChange(val, "isSensitive")}
          />
        </ThemedView>

        <ThemedView style={styles.checkboxGroup}>
          <ThemedText>Sesuai Aturan</ThemedText>
          <Checkbox
            value={formData.isSiteCompliant as boolean}
            onValueChange={(val) => handleOnChange(val, "isSiteCompliant")}
          />
        </ThemedView>

        <TouchableOpacity style={styles.button} onPress={createPost}>
          <ThemedText style={styles.buttonText}>
            Buat
          </ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 24, paddingHorizontal: 16 },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16
  },
  specialTagButton: {
    fontWeight: 'bold',
    color: "#739de6"
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkboxGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 4,
    borderRadius: 80,
    marginTop: 16,
    backgroundColor: "#65a4ec",
    color: "#FFFFFF",
    maxWidth: 60
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
export default CreatePost