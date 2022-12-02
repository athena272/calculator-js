import themeSwitcher from "./themeSwitcher.js"
import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleClearButton, handleButtonPress, handleTyping } from "./keyHandlers.js"

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)