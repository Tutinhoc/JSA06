import { TMDB_API_KEY } from "./config.js";

const API_root_url = "https://api.themoviedb.org/3";

const HomeAPIRoutes = {
    "Trending Movies": { url: "/trending/movie/week" },
    "Popular Movies": { url: "/movie/popular" },
    "Top Rated Movies": { url: "/movie/top_rated" },
    "Now Playing at Theatres": { url: "/movie/now_playing" },
    "Upcoming Movies": { url: "/movie/upcoming" },
  };

// hien thi phim tren trang chinh
// load phim 4 list:
document.addEventListener("DOMContentLoaded", async function () {
    // forof + entries: lấy ra key + index của object
    for (const [index, [title, route]] of Object.entries(
      HomeAPIRoutes
    ).entries()) {
      console.log(index, title, route.url);
      // 1. trending
      // 2. popular
      // 3. top rated
      // 4. upcomming
      const movies = await getMovies(title);
      renderMovieList(index, title, movies.results);
  // hero section
      renderHeroMovie(movies.results[0]);
    }

    
  });
async function getMovies(){
    // fetch: guirequest den sever
    const response = await fetch(
        API_root_url +
         HomeAPIRoutes["Trending Movies"].url + `?api_key=${TMDB_API_KEY}`

    );
    try {
        // lay du lieu tu response
        // json(): khi luu tru trong database (JSON) => ham JSON
        // giup chuyen du lieu ve object JS
        const data = await response.json();
        console.log(data);
        
        // tra ve du lieu phim moi nhat ( phan tu 0 trong danh sách phim)
        return data;
    } catch (err) {
        console.error(err);
    }
}

//getHeroMovie();


// ........
// ham render UI
function renderHeroMovie(movie){

        const hero_image =  document.getElementById("hero-image")
        const hero_title = document.getElementById("hero-title")
        const hero_desc = document.getElementById("hero-description");
        const hero_preview_image = document.getElementById("hero-preview-image");
        // cai dat du lieu moi cho cac element
        hero_title.textContent = movie.title || movie.name;
        hero_desc.textContent = movie.overview;
        hero_image.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        hero_preview_image.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

}

function renderMovieList(index, list_name, list_data){
    document.querySelector("main").innerHTML += /*html*/ `
    <div class="section">
      <h2>${list_name}</h2>

      <div class="swiper-${index} swiper">
        <div class="swiper-wrapper">
          ${list_data
            .map(
              (item) => /*html*/ `
          <a href="./info.html?id=${
            item.id
          }" class="swiper-slide" style="width: 200px !important">
            <div class="movie-card">
              <img
                class="fade-in"
                onload="this.style.opacity = '1'"
                src="https://image.tmdb.org/t/p/w200${item.poster_path}"
                alt=""
              />
              <p class="multiline-ellipsis-2">
                ${item.title || item.name}
              </p>
            </div>
          </a>
        `
            )
            .join("\n")} 
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    `;
// ?. (toán tử) kiểm tra phần có hay không để tiếp
    document.querySelector(".backdrop")?.classList.add("backdrop-hidden");

    // viêt lại phần code button trái - phải + khoảng cách card

    new Swiper(`.swiper-${index}`, {
      spaceBetween: 30,
      autoplay: { delay: 5000, disableOnInteraction: true },
      slidesPerView: "auto",
      loop: true,
      slidesPerGroupAuto: true,
      navigation: {
        prevEl: `.swiper-button-prev`,
        nextEl: `.swiper-button-next`,
      },
    });
}

// API: application programming interface
// cổng kết nối giữa client - server
// giao thức https: POST (create), GET (read), PUT (update), PATCH (update), DELETE (delete)
// PUT: tạo mơi object => ghi đè lên object cũ
// PATCH: sửa một phần object