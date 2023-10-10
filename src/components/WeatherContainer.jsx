// eslint-disable-next-line no-unused-vars
const WeatherContainer = (weather) => {
  return (
    <section>WeatherContainer
        <h3>{weather.name}, {weather.sys.country}</h3>
        <div>
            {/* {seccion superior} */}
            <article>
                <h4>{weather.weather[0].description}</h4>
                <span>{weather.main.temp}°F</span>
                <picture>
                    <img src="" alt="" />
                </picture>
            </article>
            
            {/* {seccion inferior} */}
            <article>

            </article>

        </div>

        <button>C / F</button>
    </section>
  )
}

export default WeatherContainer