import {
    useState,
    useCallback,
    useEffect
} from 'react';

const apiURL = 'http://localhost:8000/results';
export const ReflectedXSS = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        setValue((new URLSearchParams(window.location.search)).get("search"));
        fetch(`${apiURL}?search=${value}`).then(res => res.json()).then(({title}) => setTitle(title));
    }, [value]);

    return (
        <div className="App">
            <form>
                <input type="text" value={value} />
                <input type="submit" value="Submit" />
            </form>
            <div dangerouslySetInnerHTML={{ __html: title }} />
        </div>
    );
};

