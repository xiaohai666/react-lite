import { useState, useRef } from 'react';
import { Input } from 'antd';

function ScanInput(props) {
  const {
    size, value, onChange, scanFinished,
  } = props;
  const scanCode = useRef(null);
  const [src, setSrc] = useState('');
  const [uuid] = useState(util.uuid());
  const callback = (status) => {
    const audioNode = document.getElementById('scanAudio');
    setSrc(status ? scansuccess : scanfail);
    audioNode.play();
  };

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange(changedValue);
    }
  };

  const handleInputChange = (e) => {
    const code = e.target.value;
    triggerChange(code);
  };

  const onFinished = (code) => {
    if (code && code.length > 6) {
      triggerChange(code);
      scanFinished?.(code, callback);
    }
  };

  return (
    <>
      <audio id="scanAudio" autoPlay src={src}>
        <track kind="captions" />
      </audio>
      <Input
        {...props}
        type="text"
        size={size}
        value={value}
        autocomplete="off"
        className="scan-input"
        onFocus={() => { scanCode.current.upDateKey(uuid); }}
        placeholder={props.placeholder || locale('请扫描或输入')}
        onChange={handleInputChange}
      />
    </>
  );
}
export default ScanInput;
