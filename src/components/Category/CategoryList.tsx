import Colors from "@/constants/Colors"
import { IcomoonIconsName } from "@/types"
import React, { FC } from "react"
import { FlatList, Pressable, StyleSheet } from "react-native"

import Icon from "../Icon/Icon"
interface IProps {
	setCategory: React.Dispatch<any>
	category: any
}
export const CategoryList: FC<IProps> = ({ setCategory, category }) => {
	const categories = [
		//task
		IcomoonIconsName.TASK,
		IcomoonIconsName.EVENT,
		IcomoonIconsName.GAOL,
	]
	return (
		<FlatList
			contentContainerStyle={{ flexDirection: "row" }}
			data={categories}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => setCategory(item)}
					style={[
						{ borderColor: category === item ? Colors.primary : "#fff" },
						styles.iconContainer,
						{
							backgroundColor:
								(item === "goal" && Colors.lightYellow) ||
								(item === "event" && Colors.lightPurple) ||
								(item === "task" && Colors.ligthBlue),
						},
					]}
				>
					<Icon name={item} />
				</Pressable>
			)}
		/>
	)
}
const styles = StyleSheet.create({
	iconContainer: {
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		borderRadius: 30,

		borderWidth: 2,
	},
})
