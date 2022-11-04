import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

import '../styles/Links.css';

function Links() {
  const [links, setLinks] = useState([]);
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const getShortLink = async (longLink) => {
    axios
      .get(`https://api.shrtco.de/v2/shorten`, {
        params: { url: longLink },
      })
      .then((resp) => {
        const shorterLink = resp.data.result['full_short_link'];
        setShortLink(shorterLink);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getShortLink(longLink);
    if (shortLink !== '') {
      setLinks((oldState) => {
        return [
          ...oldState,
          { id: nanoid(), long: longLink, short: shortLink, copied: false },
        ];
      });
    }
  };

  const handleCopy = (id) => {
    const setText = (value) => {
      setLinks((oldLinks) => {
        return oldLinks.map((link) => {
          return link.id === id ? { ...link, copied: value } : link;
        });
      });
    };
    setText(true);

    const currentLink = links.find((link) => link.id === id);
    navigator.clipboard.writeText(currentLink.short);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form__input-container">
          <input
            type="text"
            placeholder="shorten a link here..."
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
          />
        </div>
        <button type="submit">shorten it!</button>
      </form>
      <div>
        {links?.map((link) => {
          const { long, short, id, copied } = link;
          const styles = copied ? { backgroundColor: '#3A3054' } : [];
          const text = copied ? 'Copied!' : 'Copy';
          return (
            <article key={id}>
              <div className="links-container">
                <p className="long-link">{long}</p>
                <div className="short-link-container">
                  <p className="short-link">{short}</p>
                  <button
                    type="button"
                    className="copy-link"
                    onClick={() => handleCopy(id)}
                    style={styles}
                  >
                    {text}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
