import { typedNavigation } from "@/types"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native"
import Icomoon from "react-native-icomoon"
import json from "../Icon/selection.json"
interface IProps {
	propsStyle?: StyleProp<ViewStyle>
	onPress?: () => void
	name: string
	size: number
	navigation?:
		| NativeStackNavigationProp<ParamListBase, string, undefined>
		| typedNavigation
}
export const HeaderButton: FC<IProps> = ({
	navigation,
	name,
	size,
	onPress,
	propsStyle,
}) => {
	return (
		<Pressable
			style={[styles.container, propsStyle]}
			onPress={onPress ? onPress : () => navigation.goBack()}
		>
			<Icomoon
				name={name}
				color="#14142B"
				strokeWidth={16}
				iconSet={json}
				size={size}
			/>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		top: 50,
		left: 10,
		backgroundColor: "#fff",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
})
