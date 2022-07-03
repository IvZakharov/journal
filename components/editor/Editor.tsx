import React from 'react';
import EditorJS from "@editorjs/editorjs";

export const Editor: React.FC = () => {

  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст статьи'
    })

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      }).catch(e => console.error('Error', e))
    }
  }, [])

  return (
    <div id={'editor'}>

    </div>
  );
};
