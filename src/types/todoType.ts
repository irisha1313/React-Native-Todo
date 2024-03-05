export interface ITodo {
	id: string
	title: string
	date?: string
	completed: boolean
	category: Category
}

export enum Category {
	EVENT = "event",
	TASK = "task",
	GOAL = "goal",
}
