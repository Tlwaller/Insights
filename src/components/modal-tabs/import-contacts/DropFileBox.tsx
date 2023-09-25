import React, { useRef, useState } from 'react';

interface DropFileBoxProps {
  label: string;
  className?: string;
}

const DropFileBox: React.FC<DropFileBoxProps> = ({ label, className =  '' }) => {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function(event:DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e:DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      console.log('||--drop', e.dataTransfer.files[0]);
      // handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = function(e:Event) {
    e.preventDefault();
    if (e.target) {
      let target = (e.target as HTMLInputElement);
      if (target) {
        let file = target.files && target.files[0];
        if (file) {
          // at least one file has been selected so do something
        // handleFiles(e.target.files);
        console.log('||--file selected', file);
        }
      }
    }
  };

  const onButtonClick = () => {
    inputRef && inputRef.current && (inputRef.current as HTMLInputElement).click();
  };

  return (
    <form id="form-file-upload" className='h-11 w-full max-w-full text-center relative' onDragEnter={(e) => {handleDrag(e.nativeEvent)}} onSubmit={(e) => e.preventDefault()}>
      <input 
        ref={inputRef}
        type="file" 
        id="input-file-upload" 
        multiple={false} 
        accept="text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
        className='hidden' 
        onChange={(e) => handleChange(e.nativeEvent)}
      />
      <label id="label-file-upload" htmlFor="input-file-upload" className='h-full flex items-center justify-center border-2 border-dashed bg-gray-50 border-gray-300'>
        <div>
          <p>Drop file here or</p>
          <button 
            className="upload-button cursor-pointer p-1 text-sm border-none bg-transparent hover:underline"
            onClick={onButtonClick}
          >
            Upload a file
          </button>
        </div> 
      </label>
      { dragActive && 
        <div 
          id="drag-file-element" 
          className='absolute w-full h-full top-0 bottom-0 left-0 right-0'
          onDragEnter={(e) => {handleDrag(e.nativeEvent)}} 
          onDragLeave={(e) => {handleDrag(e.nativeEvent)}} 
          onDragOver={(e) => {handleDrag(e.nativeEvent)}} 
          onDrop={(e) => {handleDrop(e.nativeEvent)}}>
          </div> 
      }
    </form>
  );
};

export default DropFileBox;