# Team - Board Project - 게시판 프로젝트
## 1. 개발 환경
- **Java**: JDK 17  
- **MySQL**: 8.0.x  
- **Frontend**: React, TypeScript, Next.js  
- **Backend**: Spring Boot, JPA, MyBatis  
- **환경 구성**: Docker, Gradle, Styled-Components

---
## 2. 실행 방법
**MySQL 수동 설정 방법 (Docker 미사용 시)**
1. MySQL 8.0 설치  
2. 아래 정보를 기반으로 DB 수동 생성:
   - **DB 이름**: `sqldb`  
   - **사용자명**: `root`  
   - **비밀번호**: `chlgmlwn!00`  
   - **SQL로 직접 생성**:
     ```sql
     CREATE DATABASE sqldb;
     ```
3. 프로젝트 클론 및 백엔드 실행:
   ```bash
   git clone https://github.com/jjjyaa/team-board-project.git
   cd back/hjtest
   ./gradlew build        # Windows는 gradlew.bat build
   ./gradlew bootRun      # Windows는 gradlew.bat bootRun

**Docker 사용 시 실행 방법**
git clone https://github.com/jjjyaa/team-board-project.git
cd back/hjtest
docker-compose up -d
./gradlew build        # Windows는 gradlew.bat build
./gradlew bootRun      # Windows는 gradlew.bat bootRun

**Frontend (React) 실행 방법**
cd front/talkspace
yarn install
yarn dev

---
## 3. 기술 스택
- **Frontend**: React, TypeScript, Next.js, Styled-Components, Context API
- **Backend**: Spring Boot, JPA, MyBatis, Spring Security
- **Database**: MySQL 8.0
- **Build Tool**: Gradle
- **기타**: Docker, Axios, JWT, ESLint, Prettier

---
## 4. 주요 기능
- **회원가입**: 이메일 및 비밀번호를 통한 사용자 등록
- **글 목록/상세**: 글 목록 조회, 글 상세 페이지 보기
- **글 검색 기능**: 검색 기능과 페이징 기능 구현
- **글 등록**: 글 등록 시 이미지 파일 업로드 가능
- **좋아요 댓글 기능**: 좋아요와 댓글 등록 수정 삭제

---
## 5. 주요화면

###  홈페이지
![홈페이지](https://github.com/jjjyaa/team-board-project/blob/master/img/HomePage.PNG)

###  게시판 목록
![게시판 목록](https://github.com/jjjyaa/team-board-project/blob/master/img/BoardList.PNG)

###  게시글 상세
![게시글 상세](https://github.com/jjjyaa/team-board-project/blob/master/img/Detail.PNG)

###  로그인
![로그인](https://github.com/jjjyaa/team-board-project/blob/master/img/Login.PNG)

###  글 등록
![글 등록](https://github.com/jjjyaa/team-board-project/blob/master/img/add-Board.PNG)

