# 💌 Team Nunettine

### [PROJECT] Nutti - Exchange diary made of react : <br/>리액트를 이용한 ~~교환일기 앱~~ 일기장 앱 구현

## 240328 리디자인 & 디벨롭

- 팀원 : 권지민, 한재영 (2인)

## 1. 프로젝트 개요

### 계획 수립 및 설계

- 기존 제작된 앱의 초기 목표인 교환일기로 제작 및 배포

### 리디자인 리프로젝트 이유

- 초기 작업 시 교환일기를 목표로 작업을 시작했으나, 계획에 달성하지 못하여 일기로만 마무리된 점이 아쉬웠다. 친구들과 공유하고 함께 쓸 수 있는 교환일기로 다시 제작하고 싶어 시작하였다.

## 2. 기획 의도 & 목표

### 목표

- 친구들과 일상을 공유하며 댓글로 소통할 수 있는 앱을 구현.
- react를 사용한 어플리케이션 구축.
- 링크 공유를 통한 맴버 추가 기능.
- 카카오톡 & 구글 계정 로그인 연결.
- 플레이스토어 앱 배포.

## 3. 작업순서

**1)** 프로젝트 재설정<br>
**2)** UI 리디자인<br>

<img src="./작업자료/images/nutti_Screenshot.gif">

## 1. 프로젝트 개요

### 계획 수립 및 설계

- 장소에 상관없이 어디서나 모바일로 쉽게 일상을 기록할 수 있는 일기장 구현.

### 프로젝트 선정 이유

- ~~친구들과 일기를 기록하고 서로의 추억을 공유.~~
- 언제 어디서나 쉽게 일상을 기록하고 보관할 수 있는 일기장.
- 나만의 기록하고 싶은 주제별 일기장을 생성하여 일기를 작성.

## 2. 기획 의도 & 목표

### 목표

- ~~친구들과 하루를 공유하며 소통할 수 있는 앱을 구현.~~
- react를 사용한 사용자 데이터 관리의 원활한 연결 구현.
- 백앤드를 이용한 회원가입, 로그인 기능 완성.
- 프로젝트와 더불어 팀원들의 지속 가능한 동기부여로 성공 가능성을 높임.

## 3. 작업순서

**1)** 프로젝트 선정<br>
**2)** 요구사항 분석 및 공통 가이드라인 작성<br>
**3)** 데이터 베이스 모델 정의<br>
**4)** React 앱 생성<br>
**5)** UI 디자인<br>
**6)** 데이터 베이스 수정 및 오류 수정 작업<br>
**7)** 배포 후 발표 & 보고서 작성<br>

## 4. 사용 기술

### 개발 환경

**1) FRONTEND**

- **라이브러리/프레임워크:** React
- **기타 도구:** react-router-DOM
- **언어:** JavaScript / CSS(module.css)

**2) BACKEND**

- **런타임환경:** Node.js
- **프레임워크:** Express
- **Express 미들 웨어:** express-session
- **기타 도구:** nodemon, mongoose, cors, axios, sha256 이용한 비밀번호 해싱
- **Database:** mongoDB
- **배포:** cloudtype

**3) 사용 프로그램**

- git / GitHub
- GitHub pages
- figma
- Procreate
- Notion

## 5. 각 담당 업무

**1) 역할 분담**

| 역할 |  이름  |     담당      |
| :--: | :----: | :-----------: |
| 리더 | 한재영 |   작업 기록   |
| 팀원 | 김신영 | 일러스트 작업 |
| 팀원 | 허수인 |     발표      |

**2) 작업 분담**

|  이름  |    담당 작업 파트     |
| :----: | :-------------------: |
| 한재영 |  Month / DailyDiary   |
| 김신영 |  Postiong / viewPost  |
| 허수인 | Home / Loading / Join |

## 6. 프로젝트 내용

### 사용자 시나리오

<img src="./작업자료/images/01.jpg">

### 요구사항 분석

**1) 기능적 요구사항**

|               기능               | 기능 상세 설명                                        |
| :------------------------------: | :---------------------------------------------------- |
|         첫페이지 (Home)          | 로딩 페이지 이후 로고 이미지                          |
|                                  | 회원가입 / 로그인 페이지로 이동                       |
| 회원가입 / 로그인 (Join / Login) | 프로필 선택 / 아이디(닉네임) / 비밀번호 / 이메일 입력 |
|                                  | 가입 완료 후 첫페이지 이동                            |
|          일기장 (Month)          | 사용자 설정 일기장 추가                               |
|      일기 추가 (DailyDiary)      | 일기 리스트, 새로운 일기 추가                         |
|       일기 작성 (Postiong)       | 날짜, 제목, 내용 입력                                 |
|   작성한 일기 보기 (viewPost)    | 작성한 일기 내용 확인, 수정 및 삭제                   |

**2) 비기능적 요구사항**

|             기능              | 기능 상세 설명                                                                                  |
| :---------------------------: | :---------------------------------------------------------------------------------------------- |
| 일러스트를 활용한 프로필 작업 | 전체적인 디자인에 어울리는 동물 일러스트를 프로필 사진으로 이용하여 사용자의 재미와 흥미를 유발 |
|        깔끔한 레이아웃        | 직관적으로 알아볼 수 있는 레이아웃 아이콘으로 구성하여 높은 편의성 요구                         |
|    자연스러운 앱 사용 흐름    | 앱이 다음 페이지로 넘어가는 경우 순서가 어색하지 않게 다음 동작이 진행되도록 페이지 구성        |

### 워크플로우

<img src="./작업자료/images/02.jpg">

### 인포메이션 아키텍처

<img src="./작업자료/images/03.jpg">

### 디렉토리 구조

<img src="./작업자료/images/04.jpg">

### 페이지 구성(와이어 프레임)

<img src="./작업자료/images/05.png">

### UI 디자인

**1) 디자인 컨셉**

- 귀여운 / 깔끔한 / 다이어리

**2) 메인/서브 컬러 선정**

<img src="./작업자료/images/readme_06.JPG">

**3) 일기장/프로필 캐릭터 일러스트**

- 일기장

<img src="./작업자료/images/readme_07.JPG">

- 프로필 캐릭터(총 19마리 동물 프로필)

<img src="./작업자료/images/readme_08.JPG">

### 앱 구현 및 주요 기능

<img src="./작업자료/images/readme_09-1.JPG">
<img src="./작업자료/images/readme_09-2.JPG">
<img src="./작업자료/images/readme_09-3.JPG">

### 작업 시 문제 및 해결 방법

**1) 기능적 오류**

1. 컴포넌트 상태 값 관리

- useState사용: 컴포넌트 벗어나면 데이터 사라짐
- redux사용: 새로고침 시 데이터 사라짐
- local ragistry사용: 해당 서버에서만 데이터 유지됨, 모든 입력 값들이 연동되어 출력됨
- MongoDB사용: 데이터 베이스를 mongodb로 변경하여 안정적이고 수월한 데이터 관리

2. 뒤로가기 버튼 실행 안됨

- navigate경로 ‘-1’을 문자열로 작성해 작동하지 않은 것을 확인하고 숫자로 수정

3. 일기장 추가 시 ‘기존 일기장 목록 + 새로 추가한 일기장’이 반복해서 생겨남

- map이 아닌 다른 값이 필요할 것으로 보여져 ul안에 있던 monthItem을 ul → div로 변경, key값을 설정

4. 일기 수정 삭제 기능을 완벽하게 완성하지 못함

- 정확한 원인을 파악 후 기능 완성할 것

**2) 비기능적 오류: 디자인 컨셉 불분명**

**① 초기 디자인**

- 낮은 채도로 무거운 느낌
- 귀여운 일러스트와 반대로 색감이 맞지 않아 컨셉이 명확하지 않음
- 조금 올드한 느낌의 레이아웃 스타일

**② 변경**

- 컬러감에 대한 피드백으로 다크모드에 초점으로 변경
- 전체 색상을 흑백 모노톤으로 변경
- 깔끔하지만 컴러감이 부족하여 심심함
- 초기 컨셉의 귀여운 느낌이 사라짐

**③ 최종**

- 전반적인 디자인의 색상 채도를 높여 컬러 재설정
- 초기 컨셉의 귀여운 느낌을 살림

## 7. 프로젝트 완료 리뷰

### 아쉬운 부분

- 여러 사용자간 연결을 해결하지 못함.
- 초기 목표인 친구들과의 교환 일기장으로 완성하지 못함.
- 교환일기장을 바탕으로 일기장 앱으로 변경하는 과정에서 데이터 관리 부분에 아쉬움.
- mongoDB로 데이터 이동 후 일기 추가, 수정 및 삭제가 원활하게 이루어지지 않음.

### 잘한 부분

- 수업에서 배운 모든 데이터 관리 방법을 바탕으로 계속 수정.
- 여러번의 수정으로 해결 과정은 길었지만, 배운 내용을 다시 복습할 수 있는 기회였음.
- 각자 맡은 파트뿐 아니라 다른 팀원의 파트도 서로 시도해보며 작업.

### 최종 리뷰

- 초창기 목표는 여러 사용자간의 소통하는 교환 일기장이었으나, 완성하지 못한 아쉬움이 있다. 수업에서 database를 이용해 여러 데이터를 관리해서 작업하는 부분에서 아직은 부족한 부분이 있다는 것을 느꼈다. 그래도 작업을 진행하며 수업시간에 배운 모든 데이터 관리 방법을 총동원하여 해결하려고 노력하였다. useState를 시작으로 redux, local ragistry, MongoDB까지 안정적인 데이터 관리에 힘썼다.
- 팀작업을 진행하면서 수업시간 이외에는 서로 연락이 잘 되지 않아 진행사항에 대해 빠르고 정확한 소통을 하기가 어려웠다. 하지만 팀원 모두가 각자 맡은 부분이 아니라도 서로의 파트가 해결될 수 있도록 같이 도우며 작업을 진행해서 많은 도움이 되었다.

### [⬇프로젝트 보러가기](#프로젝트-보러가기-1)

# :boom: Project Timeline

<details open>
<summary> 프로젝트 타임라인 정리 [접기/펼치기]</summary>

## 23.12.21 [발표 및 보고서 제출]

## 23.12.20 [작업 마무리 및 발표 준비]

## 231221

- 카페에 url 자료 업로드
- 완료보고서 작성 할 것(금요일)
- 프로젝트 완료는 화요일 전까지 수정보완 하셔라
- url로 열었을 때 문제가 되는 부분 모두 수정…

### 프로젝트 수정 사항

- [ ] 친구 초대 기능 수정
- [ ] 프로필 이미지 선택 가능
- [ ] mongoDB 연결 (일기장, 일기, 댓글)
- [ ] 수정, 삭제 기능 완성
- [ ] 일기 작성시 작성되지 않은 부분이 있으면 알람창 뜨게
- [ ] 하단 메뉴 바 추가

- **누네띠네 :교환일기 app**
  ### 질문
  - 회원가입할때 아이디와 비밀번호 실제로 구현되는지
  - 일기에 댓글쓰는기능에 사용자는 익명인지
  - 동물얼굴이 바뀌는건 의도한건지
  - 공유일기장인데 소통하는 방식이 정확히 어떻게 되는건지
  - 메뉴바는 안만들고 뒤로가기만 한건지
  - 회원가입할때 이용약관 내용은 있는데 체크하는건 왜 안했는지
  ### 피드백
  기능을 나눠서 설명한건 좋음
  제일 큰 문제사항 오늘 배운거로 수정하세요 ㅋㅋ
  교환일기 앱인데 기능이 많이 부족하다
  → 프로젝트 주제를 구현한 내용과 어울리게 변경하는 게 좋을듯
  뭐가 추가적으로??…했음좋겠다.. 하셨는데 못들음
  UI 적으로 부족함
  아무런 글이 없으면 바로 글을 쓴다거나 흐름이 자연스럽지 않다.

1. **개인 일기장으로 1차 완성**
   1. 몽고DB 이용: 일기장, 일기 리스트, 사용자 데이터 관리
   2. 사용자 프로필 이미지 선택 가능하도록 구현
   3. 일기 수정, 삭제 기능 완성
   4. 하단 메뉴바 추가하여 원활한 이동 가능하도록 구현
   5. 워크플로우 수정해서 UI디자인
   - 로그인/회원가입
   - 일기장
   - 일별일기
   - 일기 작성
   - 일기 보기
2. **교환 일기장으로 완성**
   1. 사용자 초대해서 댓글 작성이 가능하도록 구현

## 231220

### 코드 작업

- mongoDB로 데이터 관리 변경
  - 로그인
  - 회원가입
  - 일기장
  - 일기 수정 / 삭제
  - 댓글 수정 / 삭제

### 발표준비

- 피피티 제작
- 대본 작성

## 231218

### 모달창 디자인 변경

- 하단 모달창에서 3점 밑에 작은 창으로 변경
- 버튼은 글자로 입력

### 버튼 아이콘 선정

- 댓글, 댓글삭제 버튼 아이콘 선정
- 다른 버튼은 글자로 입력해서 작업하기로

## 작업 중 오류사항

- 뒤로가기 버튼 실행 안 됨 : -1 문자열로 작성해서 작동 안됨 - 문자열 빼주니(?)작동
- 일기 월 목록 추가 시 기존 리스트 + 새로운 목록이 반복해서 생겨남(map이 아닌 다른 코드가 필요할 것 으로 보여짐)→ ul 안에 있던 monthItem을 ul없이 작성, key값 idx로 설정

## 수정사항

- 수인
  - [x] ~~로그인 로그아웃 연결 (몽고디비 배우고 해결하기)~~
  - [x] 일기장에서 일기장 삭제 버튼 추가
- 재영
  - [ ] 일기 리스트 유지할 수 있도록 레지스트리로 수정
  - [ ] 일기 생성 후 뒤로가기 버튼 누르면 ‘/:monthParam’나오고 있어서 일기장 이름이 제대로 나오도록 경로 수정
- 신영
  - [ ] 일기 수정, 삭제 버튼 작동
  - [x] 컬러 일러스트로 CSS 수정

## 231215-16

## 프로젝트 진행

- 변경한 디자인 컨셉으로 css 수정
- 각자 페이지 작업

## 코드 작업 중간 점검

### 현재까지 작업 중 더 진행해야 할 부분

- [x] 로그인/회원가입 기능 구현
- [ ] 회원가입 후 로그인 페이지로 넘어가게
- [x] 로그아웃 페이지 ‘환영합니다 님’ 문구 수정(?) - ex) 로그아웃하시겠습니까?
- [x] 전체 body width값 모바일 사이즈로 고정 후 작업
- [ ] 댓글, view post 모달창 수정, 삭제 버튼 아이콘 정하기
- [ ] 댓글, 일기쓰기 페이지에서 헤더 뒤로가기 버튼 작동안함
- [ ] 내용이 작성되지 않았을 때 알람뜨게

## 중간점검 피드백

- 기능 완성 정도 : 70%됨
- 모바일 width사이즈로 고정해서 작업
- 다음주 몽고DB 배운 후 로그인, 데이터 저장 작업 진행

## 231212-13

## 작업한 프로젝트 디자인 중간점검

- 디자인 컨셉이 명확하지 않음.
- 전체적으로 작업한 아이콘이나 버튼, 텍스트 박스 등 요즘 스타일과 많이 멀다.
- 참고한 앱 디자인 보고 조금 더 연구 필요.
- 영역마다 구분이 명확하지 않아서 보기 힘들다.
- 색 채도를 높일 것. 어둡고 칙칙함… 밝은 색감으로 수정이 필요할 것 같다.

###### → 다이어리 컬러 밝게 수정

###### → 밝은 컬러로 전체적인 디자인 변경

###### → 버튼이나 아이콘 등 좀 더 심플하고 디자인적인 요소로 참고해서 수정.

## 디자인 2차 중간점검

- 여전히 채도가 너무 낮다.
- 영역이 더 확실히 구분이 되면 좋겠다. (특히 버튼)
- 차라리 다크모드로 가거나 아예 밝게 가는게 좋을것같다

###### → 컬러 다 빼고 블랙 앤 화이트로 변경

###### → 일러스트 아웃라인으로 수정

## 코드 작업 중간 점검

- 현재까지 작업 중 더 진행해야 할 부분
- 한재영
  - 하위 컴포넌트로 프롬포트 전달하여 리스트 유지하기
  - 월 일기장 생성 시 다이어리 일러스트 나오게 하기
  - 일기 목록 컴포넌트가 현재 두개로 보여서 하나로 정리하기
- 허수인
  - Comment 페이지 구조 다시 짜기 (댓글 작성하고 버튼을 누르면 리스트 처럼 나와야 하는데 안나옴)
  - Loading, Home 페이지 이미지 로고 가운데 맞추기
- 김신영
  - 일기 삭제, 수정 기능 추가
  - 일러스트 흑백으로 수정
  - 일기 목록에서 제목, 내용이 많아지면 줄임표(…)로 표시되게
  - 일기 보기에서 줄바꿈 표시되게
  - 헤더 컴포넌트별로 내용이 변경되게
  - 헤더에 이전버튼 활성화

## 231211

### 작업 시 문제점 및 해결 사항

- 지금까지 작업한 개별 작업 한파일로 합쳐서 확인.

###### → 합치는 작업에서 큰 특이사항은 없었음.

- 한재영
  - 컴퍼넌트 이동 후 돌아왔을 때 생성된 list data가 날라감.
  - useState → redux로 변경하여 상태전역으로 작업하려 했으나, map을 돌리는데 문제가 생김.
    → 선생님 help
  - useState를 사용해도 문제 없음.
  - props가 제대로 전달이 안되서 그런 것 같다고 하셔서 수정 필요.
  - redux보다는 redux toolkit 추천.
  - 데이터가 저장되어야하는 부분이라 나중에 몽고디비가 필요할 것으로 보인다고 하심.
  - 추가 수정사항
    - [x] 다이어리 일러스트 리스트 보이게 작업하기
    - [x] 디자인 css 작업
- 허수인
  - 댓글 페이지에서 댓글을 달고 버튼을 누르면 필요없는 로딩화면이 나옴.
  - 로딩페이지가 보이게 하는 기능을 App.js에 연결해서 그런거같다고 하심
  - 로딩페이지 나오게 하는기능을 맨 처음에만 보이게 할려면 Home에 주는방법도 있다고 하심
  - 로딩페이지가 나오는 기능을 App.js에 둔걸 Home.js에 두어 Home으로 갈때만 보이고 다른 페이지에서는 안보이게 해결함.
  - MonthDiary컴포넌트에서 새로 생긴 일기장 마다 있는 삭제버튼이 없어 모달창 만들어 구현하려 했지만 해결이 안되서 처음부터 리스트마다 삭제버튼을 넣어서 버튼의 크기를 작게 만들어 눈에띄지 않게 css작업 이용해서 수정해야함.

## 231207

#### 퍼블리싱 가이드라인 작성

#### 작업 역할 분담

- 작업 시작은 GitHub 파일로 초기 세팅
- 각자 담당 컴포넌트 분담 후, 로컬로 작업 진행. (추후 합치기로)

## 231206

#### 디렉토리 구조 설계

- 워크플로우 기준으로 작성
- 1차적 가장중요한 부분만 디렉토리 설계
- 컴포넌트 별로 조립
- 메인기능 -> 서브기능 순으로 구조설계

#### -> 피드백

- 큰 단위 / 작은 단위로 분류
- 큰 단위의 상위 컴포넌트는 'pages' 또는 'layouts'으로 정리
- 작은 단위의 조각 컴포넌트는 'componenets' 디렉토리로 분리
- assats 폴더에 css를 따로 정리하기 보다 컴포넌트 별로 정리하여 사용하는 것을 추천.
- css를 따로 폴더를 만들어 정리할 경우 사용이 불편할 수 있음
- UI 디자인 시스템 만들어서 작업 진행할 것.

#### font 선정

- 선정 fonts

1. [봉숭아틴트](https://noonnu.cc/font_page/259)
2. ~~[온글잎 의연체](https://noonnu.cc/font_page/667)~~
3. ~~[하늘보리체](https://noonnu.cc/font_page/1243)~~

#### 랜덤 프로필 & 다이어리 일러스트 작업

## 231205

- 요구사항 분석 정리(비기능적 내용 수정)
- 와이어 프레임 작업(피그마)
- 프로토 타입, 컬러
  - 프로토 타입 작성(레이아웃 설정)
  - 메인 컬러 설정
  - 폰트 (메인, 서브) 컬러 설정
  - 폰트 서치
- 컴포넌트, 파일트리 정리

## 231204

### 프로젝트: 교환일기

- 첫페이지 - 일기를 쓸때마다 아이콘(책) 생성
  - ex) 책장 책 한권에 한달
- 아이콘 클릭했을때 해당 글로 이동
- 해당 글에 댓글 등록 - 등록후 삭제 수정 기능추가
- 오른쪽 하단에 글쓰기 아이콘추가

### 디자인 컨셉

- 책장 - 열쇠 - 책

- 벤치마킹사이트(구현앱기능)
- 사용자시나리오
- 기술
- 유스케이스(사용성 기능 파악)
- 기능구현
- 요구사항 분석(기능적, 비기능적)
- 사용자 시나리오 작성
- ~~워크플로우 작성~~
- 현재 워크플로우를 인포메이션 아키텍쳐 형식으로 작성하여 다시 작성

## 231201

### 목표

1. 친구들과 하루를 공유하며 소통할 수 있는 앱을 구현.
2. react를 사용한 사용자 간의 원활한 연결 구현.
3. 백앤드를 이용한 회원가입, 로그인 기능 완성.

### 프로젝트 선정 이유

- 단순히 SNS를 통한 일회성 대화가 아닌, 깊은 대화를 유도할 수 있는 앱 구현.
- 일기를 기록하고 서로의 추억을 공유.
- 프로젝트와 더불어 디자인적으로 팀에서 원하는 컨셉으로 진행하며, 흥미를 가지고 지속 가능한 동기부여로 성공 가능성을 높임.

### Team : 누네띠네

- 팀 구성
  - 리더 : 한재영
  - 팀원 : 김신영, 허수인
- 역할분담
  - 작업기록자 : 한재영
  - 깃관리자 : 김신영
  - 일러스트 작업 : 김신영
  - 발표 : 허수인
  </details>

# 💫프로젝트 보러가기

> ### Project site: [click🌐](https://port-0-nutti-9zxht12blqemz5ik.sel4.cloudtype.app/)
>
> > notion site: [click🌐](https://www.notion.so/Nunettine-Team-Project-fac006bb97864857b90d41a0470e2534?pvs=4)<br>
> > google-sheet site: [click🌐](https://docs.google.com/spreadsheets/d/1Cee6Nal3bsqyeE3vchGoPeeJEQRvkNYe9tQgVdrIvqA/edit?usp=sharing)

### [⬆ Go to Top](#-team-nunettine)
