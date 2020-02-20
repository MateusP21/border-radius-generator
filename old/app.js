<div className="box-container">
<div id="tp-left">
  <input
    type="range"
    onChange={e => setTopLeft(e.target.value)}
    value={topLeft}
  />
</div>
{checked && (
  <>
    <div id="left-vertical">
      <input
        type="range"
        onChange={e => setTopLeftVertical(e.target.value)}
        value={topleftVertical}
      />
      <input
        type="range"
        onChange={e => setBottomLeftVertical(e.target.value)}
        value={bottomLeftVertical}
      />
    </div>

    <div id="right-vertical">
      <input
        type="range"
        onChange={e => setTopRightVertical(e.target.value)}
        value={topRightVertical}
      />
      <input
        type="range"
        onChange={e => setBottomRightVertical(e.target.value)}
        value={bottomRightVertical}
      />
    </div>
  </>
)}

<div id="tp-right">
  <input
    type="range"
    onChange={e => setTopRight(e.target.value)}
    value={topRight}
  />
</div>

<div id="bt-left">
  <input
    type="range"
    onChange={e => setBottomLeft(e.target.value)}
    value={bottomLeft}
  />
</div>
{console.log(checked)}
<div id="bt-right">
  <input
    type="range"
    onChange={e => setBottomRight(e.target.value)}
    value={bottomRight}
  />
</div>

<div
  className="box"
  style={{
    borderRadius: `${Bradius}`
  }}
/>
</div>
<div className="display">
<input type="text" value={` border-radius: ${Bradius} `} disabled />
<div className="options">
  <input
    type="checkbox"
    defaultChecked={checked}
    onClick={() => setChecked(!checked)}
  />
  <h3>8 values</h3>
</div>
<button onClick={handleClipboard}>COPY</button>
</div>