import React, { Component } from 'react';
import logo from './quirionlogo.jpg';
import './App.css';
import './Review.css';
import ChartOne from './Charts/ChartOne';
import ChartTwo from './Charts/ChartTwo';
import ReviewSlider from './ReviewSlider';
import ContactForm from './ContactForm';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Willkommen bei quirion</h2>
        </header>
        <div className="flex-container">

          <ChartOne className="chart"/>

          <div className="rich-text-content">
            <h2>Optimale Anlagestratgien in Zeiten von Corona</h2>
            <p>
              Alle wichtigen Aktienmärkte in Europa und weltweit sind seit Mitte Februar kräftig eingebrochen. Allein der deutsche
              Aktienindex DAX hat den schnellsten Kurssturz seiner 32-jährigen Geschichte hinter sich. Er stand im März wieder auf
              dem Niveau von Mitte 2016. Der weltweite Index MSCI World, den wir – anders als den DAX – als Basis für eine Anlage
              in günstige ETFs empfehlen, ist vergleichbar stark unter die Räder gekommen.
              <br/>
              <br />
              Seitdem haben sich die Kurse aber wieder etwas erholt. Der DAX überschritt am 29. April erstmals wieder die Marke
              von 11.000 Punkten – das ist noch deutlich unter seinem Stand von Mitte Februar (13.795), aber schon ein ganzes Stück
              oberhalb der bisherigen Corona-Tiefstmarke. Auch viele andere wichtige Aktienmärkte, darunter die USA, legten zur
              Abwechslung deutliche Sprünge nach oben hin. Grund für den positiven Trend: Mehrere Staaten lockern die Beschränkungen
              für einzelne Wirtschaftszweige.
            </p>
          </div>

          <div className="rich-text-content">
            <hr />
            <h2>Aktienkursentwicklung der GAFA während der Cororna Krise</h2>
            <p>
              Mit einem Minus von 15 bzw. 19 Prozent gegenüber ihren Höchstkursen vor dem Covid-19-Ausbruch haben Alphabet und
              Facebook in den letzten Tagen indes sichtbar schlechter abgeschnitten. Die Gründe dafür lieferte die Investmentbank
              Needham gegen Ende vergangener Woche nach.

              So rechnet Analystin Laura Martin im laufenden Geschäftsjahr mit fast zwei Milliarden Dollar weniger Erlösen –
              Needham strich die Umsatzerwartungen für 2020 von 85,14 auf 83,39 Milliarden Dollar zusammen.
              Der Grund: schwächere Werbeerlöse.
            </p>
          </div>

          <ChartTwo className="chart"/>

          <div className="slider">
            <ReviewSlider class="slider" />
          </div>

          <div className="contact-form">
            <ContactForm />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
