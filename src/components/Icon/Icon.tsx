import Colors from "@/constants/Colors"
import { IcomoonIconsName } from "@/types"
import Icomoon from "react-native-icomoon"
import json from "./selection.json"
// type IconProps = Omit<IconMoonProps, "iconSet">

type IconProps = {
	name: string | IcomoonIconsName
	color?: any
	size?: number
	strokeWidth?: number
	offset?: number
	iconColor?: string
}

export default function Icon({ name, iconColor, ...restProps }: IconProps) {
	return (
		<Icomoon
			iconSet={json}
			name={name}
			size={25}
			color={Colors.primary}
			{...restProps}
		/>
	)
}
