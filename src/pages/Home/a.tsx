import { useState, useEffect } from 'react';

export default function Playground({ fn }) {
  return (
    <button
      type="button"
      onClick={() => {
        fn(11);
      }}
    >
      子组件添加
    </button>
  );
}
