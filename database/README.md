# database
DB는 postgresql을 사용하며, DB Migration Tool로 knex를 사용합니다.

## postgresql 설정
- 설치는 .dmg파일이 아닌 설정 편의 등에 이유로 homebrew를 통하여 설치를 추천드립니다.
- 아래 순서대로 설치하여 Local DB 환경 구성을 완료합니다.
~~~
1. brew 설치
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
1-1. brew가 이미 설치되어있으면 최신 상태로 업데이트
brew update

2. brew 사용에 대하여 충돌이나 오류가 없는지 확인
brew doctor

3. postgresql 설치
brew install postgresql
3-1. 설치 확인
psql -V

4. postgresql 서버 실행 / 중단
pg_ctl -D /usr/local/var/postgres start
pg_ctl -D /usr/local/var/postgres stop
4-1. 또다른 실행법
brew services start postgresql
4-2. 재부팅후에도 자동으로 실행되도록 하는 방법
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql

5. postgresql 접속
psql postgres

6. 사용자 생성(<ROLE_NAME>은 boilerplate 처럼 변경하여 입력 / <PASSWORD> boilerplate 처럼 변경하여 입력)
CREATE ROLE <ROLE_NAME> WITH LOGIN PASSWORD '<PASSWORD>';
6-1. 사용자 및 role 확인
\du
6-2. 현재 설정된 모든 role 확인
SELECT rolname FROM pg_roles;

7. 권한 부여하기
ALTER ROLE <ROLE_NAME> CREATEDB;
7-1. 권한 부여 확인
\du

8. 생성한 사용자로 로그인하기
psql postgres -U <ROLE_NAME>
로그인 하면 postgres=# 에서 postgres=> 로 바뀌게[ 되는데 #은 superuser를 뜻하고, >는 superuser가 아니라는 뜻이다.

9. DB 생성(<DATABASE_NAME>은 boilerplate 처럼 변경하여 입력)
CREATE DATABASE <DATABASE NAME>
9-1. 생성한 데이터베이스 보기
\list
9-2. 특정 유저에게 특정 DB 권한 부여하기
GRANT <GRANT_NAME> ON DATABASE <DATABESE_NAME> TO <ROLE_NAME>;
* 부여할 수 있는 권한은 아래를 참고(GRANT_NAME) *
SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER | CREATE | CONNECT | TEMPORARY | EXECUTE | USAGE
9-3. 특정 유저에게 모든 DB 권한 부여하기
GRANT ALL PRIVILEGES ON DATABASE <DATABASE_NAME> TO <ROLE_NAME>;
9-4. 테이블 리스트 보기
\dt
9-5. 특정 database로 연결하기
\connect <DATABASE_NAME>

10. SCHEMA 생성(<SCHEMA_NAME>은 local 처럼 변경하여 입력)
CREATE SCHEMA <SCHEMA_NAME> AUTHORIZATION <USER_NAME>;
10-1. SCHEMA 리스트 보기
\dn
~~~

## knex 명령어 설명
ref : http://knexjs.org/#Migrations-CLI

## scripts 설명
- yarn copy:${environment} : environment 덮어쓰기
- MIGRATION_NAME=${MIGRATION_NAME} yarn migrate:make-${environment} : DB Migration UP & DOWN Generator
- migrate:latest-${environment} : DB Migration
- seed:make-${environment} : Mock Data File Generator
- seed:run-${environment} : Mock Data 생성
- build : build

## 작업 완료 후 해야하는 일
~~~
1. DB Migration
1-1. local migration
NAME=<NAME> yarn migrate:local
1-2. development migration
NAME=<NAME> yarn migrate:development
1-2. staging migration
NAME=<NAME> yarn migrate:staging
1-3. production migration
NAME=<NAME> yarn migrate:production

2. BUILD
2-1. Development Build
yarn build:development
2-2. Production Build
yarn build:production

2. npm 배포
yarn deploy
~~~
