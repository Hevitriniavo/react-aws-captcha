import { useEffect } from "react"
import { loadScript } from "../utils"
import { createPortal } from "react-dom"

function ContainerCaptcha() {
  useEffect(() => {
    loadScript()
  }, [])

  return (createPortal(
    <div className="overlay" id="modalOverlay">
      <div className="modal" id="modal">
        <div id="captchaForm" />
      </div>
    </div>, document.body)
  )
}

export default ContainerCaptcha