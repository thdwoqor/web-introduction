
const movies = [
    {
        "rank": 1,
        "title": "나는 내일, 어제의 너와 만난다",
        "picture": "../images/movie1.jpeg",
        "summary": "5년에 한번 달이 뜨고 지는 30일 동안만 만날 수 있는 운명적인 사랑 이야기",
        "link": "https://movie.naver.com/movie/bi/mi/basic.naver?code=157178"
    },
    {
        "rank": 2,
        "title": "알리타: 배틀 엔젤",
        "picture": "../images/movie2.png",
        "summary": "300년 전의 대추락 이후 마지막으로 남은 공중도시, 자렘과 거기서 지상으로 버려지는 쓰레기 더미에서 생겨난 고철도시 이야기",
        "link": "https://movie.naver.com/movie/bi/mi/basic.naver?code=66728"
    },
    {
        "rank": 3,
        "title": "인비저블맨",
        "picture": "../images/movie3.jpeg",
        "summary": `모든 것을 통제하려는 소시오패스 남자에게서 도망친 세실리아. 그의 자살 소식과 함께 상속받게 된 거액의 유산... 하지만 그날 이후, 누구에게도 보이지 않는
                            존재가
                            느껴지기 시작했다!`,
        "link": "https://movie.naver.com/movie/bi/mi/basic.naver?code=189001"
    },
    {
        "rank": 4,
        "title": "어스",
        "picture": "../images/movie4.jpeg",
        "summary": `애들레이드는 과거에 겪은 트라우마 증상이 심해지며 나쁜 일이 일어날 것이라는 공포에 시달린다.
                            밤이 되고 윌슨은 차도에 조용히 서있는 네명의 손을 맞잡은 뭔가를 보게 되는데..."</td>
                        `,
        "link": "https://movie.naver.com/movie/bi/mi/basic.naver?code=181414"
    },
    {
        "rank": 5,
        "title": "증인",
        "picture": "../images/movie5.jpeg",
        "summary": "살인 용의자의 변호를 맡게 된 변호사가 사건의 유일한 목격자인 자폐아 소녀를 만나며 벌어지는 이야기를 그린 휴먼 드라마",
        "link": "https://movie.naver.com/movie/bi/mi/basic.naver?code=177374"
    }
]

function reset() {
    let checkbox_items = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < checkbox_items.length; i++) {
        checkbox_items[i].checked = false;
    }
    document.querySelectorAll("input[type=text]")[0].value = "";
}

function like_movies() {
    let movies = document.querySelectorAll("input[type=checkbox]");
    let count = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].checked) {
            count += 1;
        }
    }

    let name = document.querySelectorAll("input[type=text]")[0].value;

    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

window.onload = function () {
    const data_table = document.querySelector("#data")
    const check_button = document.querySelector("#check")

    for (movie of movies) {
        data_table.innerHTML += `
        <tr>
            <th scope="row">${movie.rank}</th>
            <td>${movie.title}</td>
            <td><img src="${movie.picture}"
                    width="80%" height="80%" /></td>
            <td>${movie.summary}</td>
            <td><button type="button" class="btn btn-dark" id="title-button"
                    style="white-space: nowrap;"
                    onclick="window.open('${movie.link}');">바로
                    가기</td>
        </tr>
        `

        check_button.innerHTML += `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault" style="color: #ffffff;">
                ${movie.title}
            </label>
        </div>
        `
    }
}