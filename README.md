# talkspace - 게시판
📦 **개발 환경**
- **JDK:Java 17**
- **MySQL: 8.0.x**

🐬 **MySQL 수동 설정 방법 (Docker 미사용 시)**
1. MySQL 8.0 설치

2. 아래 정보를 기반으로 DB 수동 생성
  - **DB 이름**:  sqldb
  - **사용자명**:  root
  - **비밀번호**:  chlgmlwn!00
  - **SQL로 직접 생성**: (MySQL 접속 후) CREATE DATABASE sqldb;
3. `git clone https://github.com/jjjyaa/talkspace/`
4. `cd back/hijtest`
5. `./gradlew build` (Windows는 `gradlew.bat build`)
6. `./gradlew bootRun` 으로 서버 실행 (Windows는 `gradlew.bat bootRun`)

🐳 **Docker 사용 시 실행 방법**
1. `git clone https://github.com/jjjyaa/talkspace/`
2. `cd back/hijtest`
3. `docker-compose up -d`
4. `./gradlew build` (Windows는 `gradlew.bat build`)
5. `./gradlew bootRun` 으로 서버 실행 (Windows는 `gradlew.bat bootRun`)

## 🧪 Frontend (React) 실행 방법

1. `cd front/talkspace`
2. `yarn install`
3. `yarn dev` 실행 후 (http://localhost:3000) 접속

🛠 **기술 스택**  
- **Frontend**: React, Context API, Styled-Components,
- **Backend**: Spring Boot, MySQL

## 📌 주요 기능
- **회원가입**: 이메일 및 비밀번호를 통한 사용자 등록
- **글 목록/상세**: 글 목록 조회, 글 상세 페이지 보기
- **글 검색 기능**: 검색 기능과 페이징 기능 구현
- **글 등록**: 글 등록 시 이미지 파일 업로드 가능
- **좋아요 댓글 기능**: 좋아요와 댓글 등록 수정 삭제

## 📸 스크린샷

### 🛍️ 홈페이지
![홈페이지](./img/HomePage.png)

### 📦 게시판 목록
![게시판 목록](./img/BoardList.png)

### 🛒 게시글 상세
![게시글 상세](./img/Detail.png)

### 🔐 로그인
![로그인](./img/Login.png)

### 🧑‍💼 글 등록
![글 등록](./img/add-Board.png)

