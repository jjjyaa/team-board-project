# Team - Board Project - 게시판 프로젝트
## 0. 프로젝트 개요

이 프로젝트는 **2인 팀**으로 진행한 **웹 기반 게시판 시스템**입니다.  
회원가입, 로그인, 게시글 작성/수정/삭제, 댓글, 좋아요, 파일 업로드 등  
**기본적인 게시판의 모든 핵심 기능**을 구현하는 데 초점을 맞췄습니다.

### 주요 특징
- **React + TypeScript + Next.js** 프론트엔드
- **Spring Boot + JPA + MyBatis** 백엔드
- **CRUD**, **검색/페이징**, **이미지 업로드**, **좋아요/댓글** 기능 포함
- **프론트와 백을 독립적으로 구성하고 REST API로 통신**
- **세션 기반 로그인 인증 처리**

###  팀 구성 및 역할
| 이름 | 역할 |
|------|------|
| 최희주 | 프론트엔드 전반 개발, API 연동, UI 구성, 게시글/댓글/좋아요 기능 구현 |
| 이재우 | 백엔드 개발, DB 설계, 회원/게시글/댓글 API 개발 |

---
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
2. 아래 정보를 기반으로 DB 수동 생성
  - DB 이름:  sqldb
  - 사용자명:  root
  - 비밀번호:  chlgmlwn!00
  - SQL로 직접 생성: (MySQL 접속 후) CREATE DATABASE sqldb;
3. `git clone https://github.com/jjjyaa/team-board-project.git`
4. `cd back/hijtest`
5. `./gradlew build` (Windows는 `gradlew.bat build`)
6. `./gradlew bootRun` 으로 서버 실행 (Windows는 `gradlew.bat bootRun`)

**Docker 사용 시 실행 방법**
1. `git clone https://github.com/jjjyaa/team-board-project.git`
2. `cd back/hijtest`
3. `docker-compose up -d`
4. `./gradlew build` (Windows는 `gradlew.bat build`)
5. `./gradlew bootRun` 으로 서버 실행 (Windows는 `gradlew.bat bootRun`)

**Frontend (React) 실행 방법**
1. `cd front/talkspace`
2. `yarn install`
3. `yarn dev` 실행 후 (http://localhost:3000) 접속

---
## 3. 기술 스택
- **Frontend**: React, TypeScript, Next.js, Styled-Components, Context API, Axios
- **Backend**: Spring Boot, JPA, MyBatis
- **Database**: MySQL 8.0
- **Build Tool**: Gradle

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

