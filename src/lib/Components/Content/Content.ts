import type { TeamContentConfig } from "./Team/TeamContent"
import type { TodoContentConfig } from "./Todo/TodoContent"
import type { UserContentConfig } from "./User/UserContent"

export type ContentType = "team" | "user" | "todo"

export interface ContentConfig {
	id: string
	title?: string
	caption?: string
	contentType: ContentType
}

export type Content<K extends keyof ContentConfig = keyof ContentConfig> = {
	type: K
	config: ContentConfig[K]
}

export type AllContentTypes = TeamContentConfig | TodoContentConfig | UserContentConfig

export interface SendContentConfig {
	id?: string
	title?: string
	caption?: string
	contentType?: ContentType
	[type: string]: any
}
