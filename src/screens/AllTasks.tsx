import { AnimatedCategory, TackItem } from "@/components"
import Colors from "@/constants/Colors"
import { defaultStyles } from "@/constants/Styles"
import { useAppSelector, useDebounce } from "@/hooks"
import React, { FC, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface IProps {}

export const AllTasks: FC<IProps> = () => {
	const todos = useAppSelector((state) => state.todo.todos)
	const todoStatus = useAppSelector((state) => state.todo.status)
	const filteredTodoByStatus = () => {
		if (todoStatus === 1) {
			return todos.filter((todo) => todo.completed)
		} else if (todoStatus === 2) {
			return todos.filter((todo) => !todo.completed)
		} else if (todoStatus === 0) {
			return todos
		}
	}
	const [searchValue, setSearchValue] = useState("")
	const searchValueDebounced = useDebounce(searchValue, 500)

	const filteredTodos = filteredTodoByStatus().filter((item) => {
		const titleTime = (item.title + item.date).toLowerCase()
		return titleTime.includes(searchValueDebounced.toLowerCase())
	})

	return (
		<SafeAreaView style={styles.container}>
			<AnimatedCategory />
			<View style={[defaultStyles.line]} />
			<View style={styles.searchContainer}>
				<TextInput
					placeholder="Search task "
					style={styles.search}
					onChangeText={(title) => setSearchValue(title)}
				/>
				<Text>Tasks: {todos.length}</Text>
			</View>

			{filteredTodos.length === 0 ? (
				<Text style={{ color: "red", fontSize: 18 }}>
					Sorry,i can't find the assignment you asked for.{" "}
				</Text>
			) : (
				<FlatList
					showsVerticalScrollIndicator={false}
					data={filteredTodos}
					renderItem={({ item, index }) => (
						<TackItem item={item} index={index} />
					)}
					style={[styles.flatListContainer]}
				/>
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingVertical: -50,
		backgroundColor: Colors.background,
	},
	flatListContainer: {
		width: 360,
		borderRadius: 20,
		maxHeight: 520,
	},
	search: {
		right: 40,
		paddingHorizontal: 100,
		paddingVertical: 20,
		backgroundColor: Colors.ligthBlue,
		borderRadius: 10,
		marginVertical: 20,
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		maxWidth: 270,
	},
})
