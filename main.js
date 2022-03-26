import { emit, listen } from '@tauri-apps/api/event'

listen('tauri://file-drop', (e) => {
  alert(e.payload.join("\n"))
})
