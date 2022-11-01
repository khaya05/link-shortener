
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
      short: 'https://www.linkedin.com/company/frontend-mentor',
    },
  ];

  return (
    <div>
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
              <div>
                <p>{long}</p>
                <div>
                  <p>{short}</p>
                  <button type="button">copy</button>
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
