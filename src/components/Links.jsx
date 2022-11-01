
import '../styles/Links.css'
function Links() {
  const links = [
    {
      long: 'https://www.frontendmentor.io',
      short: 'https://rel.ink/k4lKyk',
    },
    {
      long: 'https://twitter.com/frontendmentor',
      short: 'https://rel.ink/gxOXp9',
    },
    {
      long: 'https://www.linkedin.com/company/frontend-mentor',
      short: 'https://rel.ink/gob3X9',
    },
  ];

  return (
    <div className='form-container'>
      <form>
        <input type="text" placeholder="shorten a link here..." />
        {false && <p>please add a link</p>}
        <button type="submit" onSubmit={() => {}}>
          shorten it!
        </button>
      </form>
      <div>
        {links.map((link, index) => {
          const { long, short } = link;
          return (
            <article key={index}>
              <div className='links-container'>
                <p className='long-link'>{long}</p>
                <div className='short-link-container'>
                  <p className='short-link'>{short}</p>
                  <button type="button" className='copy-link'>copy</button>
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
