import { useState } from 'react'
import './Controls.css'

function Controls() {
  return (
    <section id="controls">
      <h2>Controls</h2>
      <p>Something here</p>
      <p>Something here</p>
      <p>Something here</p>
      <p>Something here</p>
      <p>Something here</p>
      <div id="credits">
        <p className="credit">Ui icons created by <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Icon mania</a> - Flaticon</p>
        <p className="credit">Settings icons created by<a href="https://www.flaticon.com/free-icons/settings" title="settings icons">dmitri13</a> - Flaticon</p>
      </div>
    </section>
  )
}

export default Controls;