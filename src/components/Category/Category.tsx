import Colors from "@/constants/Colors"
import { Category as CategoryType } from "@/types"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import Icon from "../Icon/Icon"
interface IProps {
	categoryName: CategoryType
	compleatedTask: boolean
}
export const Category: FC<IProps> = ({ categoryName, compleatedTask }) => {
	return (
		<View
			style={[
				compleatedTask ? { opacity: 0.3 } : null,
				styles.iconContainer,

				{
					backgroundColor:
						(categoryName === "goal" && Colors.lightYellow) ||
						(categoryName === "event" && Colors.lightPurple) ||
						(categoryName === "task" && Colors.ligthBlue),
				},
			]}
		>
			<Icon name={categoryName} />
		</View>
	)
}
const styles = StyleSheet.create({
	iconContainer: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
})
