import Colors from "@/constants/Colors"
import React, { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { EdgeInsets } from "react-native-safe-area-context/lib/typescript/src/SafeArea.types"

interface IProps {
	onPress: () => void
	title: string
	insets?: EdgeInsets
	alignSelfStyle?: any
}
export const Button: FC<IProps> = ({
	onPress,
	title,
	insets,
	alignSelfStyle,
}) => {
	return (
		<View>
			<Pressable
				onPress={onPress}
				style={[
					styles.container,
					{
						bottom: insets ? insets.bottom : null,
						alignSelf: alignSelfStyle ? alignSelfStyle : null,
					},
				]}
			>
				<Text style={styles.text}>{title}</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,

		width: 355,
		height: 56,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: Colors.white,
		fontWeight: "700",
		fontSize: 16,
	},
})
