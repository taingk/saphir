import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default ({ setContent }) => <CKEditor
  editor={ClassicEditor}
  onChange={( event, editor) => {
    setContent(editor.getData());
  }}
/>;
