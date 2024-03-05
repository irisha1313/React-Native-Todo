import { useAppDispatch } from "@/hooks"
import { deleteTodo } from "@/store/slises/TodoSlice"
import { ITodo, IcomoonIconsName } from "@/types"
import React, { FC } from "react"
import { Alert, Pressable, StyleSheet, View } from "react-native"
import Icon from "../Icon/Icon"

interface IProps {
	item: ITodo
}
export const ConfirmButton: FC<IProps> = ({ item }) => {
	const dispatch = useAppDispatch()

	const createConfirnButtonAlert = () =>
		Alert.alert("Are you sure you want to delete the task?", "", [
			{
				text: "Cancel",
				onPress: () => null,
				style: "cancel",
			},
			{ text: "OK", onPress: () => dispatch(deleteTodo({ id: item.id })) },
		])

	return (
		<View style={styles.container}>
			<Pressable onPress={createConfirnButtonAlert}>
				<Icon name={IcomoonIconsName.BIN} />
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-around",
		alignItems: "center",
	},
})
