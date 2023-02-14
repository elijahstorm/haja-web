import { pipe } from "$lib/fp-ts"
import { getDownloadURL, getStorage, ref, uploadBytes, type UploadResult } from "firebase/storage"
import { api } from "./firestore"

const storage = getStorage()

const connect = (store: typeof ref) => (api: string) => store(storage, api)

const upload = (protocol: typeof uploadBytes, blob: ArrayBuffer) => (ref) => protocol(ref, blob)

export const uploadFile: (
	data: StoreLocation & {
		blob: ArrayBuffer
	}
) => Promise<UploadResult> = ({ blob, id, source = null, type = null, isTeam = false }) =>
	pipe(api({ id, source, type, isTeam }), connect(ref), upload(uploadBytes, blob))

export const uploadFileAndGetUrl: (
	data: StoreLocation & {
		blob: ArrayBuffer
	}
) => Promise<string> = async (data) => getDownloadURL(await (await uploadFile(data)).ref)
