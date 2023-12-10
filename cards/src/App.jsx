import 'bulma/css/bulma.css';
import './App.css';
import Movie from './Movie';
import ShawshankRedemptionImage from './images/shawshank_redemption.jpg';
import TheGodfatherImage from './images/godfather_part1.jpeg';
import TheDarkKnightImage from './images/dark_knight.jpg';
import SchindlersListImage from './images/schindlers_list.jpg';
import TheGodfather2Image from './images/godfather_part2.jpeg';
import LotrImage from './images/lotr_cover.jpg';
import AngryMenImage from './images/12_angrymen.jpg';
import PulpFictionImage from './images/pulp_fiction.jpg';

function App() {
  return (
    <div className='App'>
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">IMDb Top 8 Movies (Sorted by User rating Descending)</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Movie
                image={ShawshankRedemptionImage}
                title="1) The Shawshank Redemption"
                description="In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison"
              />
            </div>
            <div className='column'>
              <Movie
                image={TheGodfatherImage}
                title="2) The Godfather"
                description="The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire)."
              />
            </div>
            <div className='column'>
              <Movie
                image={TheDarkKnightImage}
                title="3) The Dark Knight"
                description="The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos."
              />
            </div>
            <div className='column'>
              <Movie
                image={SchindlersListImage}
                title="4) Schindler's List"
                description="In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
              />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <Movie
                image={TheGodfather2Image}
                title="5) The Godfather: Part II"
                description="The Godfather: Part II juxtaposes two stories: that of Michael Corleone (played, as in The Godfather, by Al Pacino) in the years after he becomes head of the Corleone family business and that of his father, Vito Corleone, as a young man (portrayed by Robert De Niro)."
              />
            </div>
            <div className='column'>
              <Movie
                image={LotrImage}
                title="6) The Lord of the Rings: The Return of the King"
                description="The Lord of the Rings: The Return of the King is a fantasy film directed by Peter Jackson and released in 2003, based on the second and third parts of J. R. R. Tolkien's The Lord of the Rings books. It is the third film in the Lord of the Rings film series, after The Fellowship of the Ring and The Two Towers."
              />
            </div>
            <div className='column'>
              <Movie
                image={AngryMenImage}
                title="7) 12 Angry Men"
                description="The film tells the story of a jury of 12 men as they deliberate the conviction or acquittal of a teenager charged with murder on the basis of reasonable doubt; disagreement and conflict among them force the jurors to question their morals and values."
              />
            </div>
            <div className='column'>
              <Movie
                image={PulpFictionImage}
                title="8) Pulp Fiction"
                description="Hitmen Jules Winnfield and Vincent Vega arrive at an apartment to retrieve a briefcase for their boss, gangster Marsellus Wallace, from a business partner, Brett. After Vincent checks the contents of the briefcase, Jules shoots one of Brett's associates."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
