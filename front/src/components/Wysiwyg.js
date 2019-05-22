import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default ({ setValue, content = '' }) => (
  <CKEditor
    data={content}
    editor={ClassicEditor}
    onChange={(event, editor) => {
      setValue(editor.getData());
    }}
  />
);
