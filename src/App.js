import './App.css';
import { useState } from 'react';

function App() {
  const [imageNumber, setImageNumber]= useState(0)
  const images=[
    'https://avatars.mds.yandex.net/i?id=98e2ad700d7c8efbc728e6baefc44369b9e680b2-11003380-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=fe80ae2978eebb9ef8fb57db3c18c73693b7e97a-5022897-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0299014892749f91ccfc44ff0ce043e68fcfab02-8342484-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=f1e3b2717160b57cf3a389d6ad25f73a97dcf4ef-12165746-images-thumbs&n=13',
    'https://images2.alphacoders.com/189/thumb-1920-189770.jpg',
    'https://avatars.mds.yandex.net/i?id=d9fd79dee5cbe71dde219f62ae85c677c268d292-10736367-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1ce88ff767dd6426772bf41bce273dd653cdede0-10121616-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=470d5173d6e5e87f1be212fe3c8669ac02e9c602-12150810-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=235fde05bf8234fa77fd2915256f96acf77d9f13-12615826-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=72f8de5d8a282ad027227c4bb5ff12285731155e-12150810-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=befcec89ace5a9540b086e3ca4be845ed3067d3d-12491107-images-thumbs&n=13',
  ];
  const next=()=>{
    if(imageNumber=== 10){
      setImageNumber(0)
    }
    else{
      setImageNumber(imageNumber+1)
    }
  }
  const previos =()=>{
    if (imageNumber ===0){
      setImageNumber(2)
    }
    else{
      setImageNumber (imageNumber-1)
    }
  }
  return (
    <div className="images">
      {/* <button onClick={imageNumber}>Number</button> */}
      <button onClick={previos}>Previos</button>
      <img src={images [imageNumber]} alt="" />
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
