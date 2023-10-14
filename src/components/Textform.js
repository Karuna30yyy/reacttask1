import {useState} from 'react'

export default function TextForm() {

    const [text, setText] = useState("");
    const [Count, setCount] = useState(0);
    const handleOnChange = (event)=>{
        setText(event.target.value);

        const words = text.split(' ');
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setCount(wordCount);
       }

    return(
        <div>
            <h2 align="center">Responsive Paragraph Word Counter</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea"></textarea>
            <h4>word count: {Count}</h4>
        </div>
    );
}