import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from '../Button/Button';
import css from './AutoSearching.module.scss';

const AutoSearching = ({ dataList = [] }) => {
  const [keyword, setKeyword] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [showAutoSuggestion, setShowAutoSuggestion] = useState(false);
  const autoSuggestionRef = useRef(null);
  const navigate = useNavigate();

  useOutsideClick(autoSuggestionRef, () => setShowAutoSuggestion(false));

  const handleSuggestionClick = event => {
    setKeyword(event.target.id);
    setShowAutoSuggestion(false);
  };

  const handleClick = event => {
    event.preventDefault();
    navigate('/search', { state: { data: filteredData } });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!keyword) return setSuggestionList([]);
      const nameSet = new Set();
      const newFilteredData = dataList.filter(data => {
        if (data.name.includes(keyword)) {
          nameSet.add(data.name);
          return true;
        }
      });
      setSuggestionList([...nameSet]);
      setFilteredData(newFilteredData);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <form className={css.layout} ref={autoSuggestionRef}>
      <input
        className={css.input}
        type='text'
        placeholder='이름을 검색해 보세요.'
        value={keyword}
        onFocus={() => {
          setShowAutoSuggestion(true);
        }}
        onChange={e => setKeyword(e.target.value)}
      />
      <Button type='submit' fill={false} size='s' className={css.button} onClick={handleClick}>
        search
      </Button>
      {showAutoSuggestion && (
        <ul className={css.itemBox}>
          {suggestionList.map(data => (
            <li
              className={css.item}
              key={data}
              id={data}
              onClick={handleSuggestionClick}
              dangerouslySetInnerHTML={{
                __html: data.replace(
                  new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
                  '<span>$1</span>',
                ),
              }}
            />
          ))}
          {suggestionList.length === 0 && <li className={css.item}>검색된 결과가 없습니다.</li>}
        </ul>
      )}
    </form>
  );
};

export default AutoSearching;
