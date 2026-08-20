# 프로젝트 문서 허브 (Project Documentation Hub)

`docs/` 디렉토리는 **claude_fullStack** 프로젝트의 UI/UX 화면 설계서, REST API 명세서, 데이터베이스 스키마 설계서, 트러블슈팅 가이드 등 모든 기술 문서를 **용도별(역할별) 디렉토리**로 구분하여 체계적으로 관리하는 공간입니다.

---

## 1. 용도별 디렉토리 구조 및 역할

```
docs/
├── README.md                 # (본 문서) 문서 허브 인덱스 및 용도별 작성 가이드
│
├── design/                   # [화면 / UI / UX 설계서 전용 폴더]
│   └── design_spec.md        # Todo 화면 UI/UX 와이어프레임 & Clean Blue & White 디자인 시스템 연동 명세서
│
├── api/                      # [백엔드 / REST API 명세서 전용 폴더]
│   └── api_spec.md           # Express + Prisma CRUD REST API 엔드포인트 명세서
│
├── database/                 # [데이터베이스 모델 설계서 전용 폴더]
│   └── db_schema.md          # Prisma ORM Model 정의 & SQLite 데이터베이스 스키마 설계서
│
└── troubleshooting/          # [트러블슈팅 & 회고 노트 전용 폴더]
    └── troubleshooting.md    # 한글 인코딩, JSON 미들웨어, 타입 캐스팅 등 공통 에러 해결 가이드
```

---

## 2. 용도별 폴더 및 파일 명명 규칙

AI 에이전트 및 개발자는 문서를 생성하거나 저장할 때 `day*`와 같은 회차 지칭 대신 **문서의 목적과 역할에 맞는 전용 폴더**를 사용합니다.

| 용도 분류 | 전용 폴더 경로 | 표준 파일명 | 문서 내용 및 목적 |
| :--- | :--- | :--- | :--- |
| **화면 / UI / UX** | `docs/design/` | `design_spec.md` | 와이어프레임, 컴포넌트 규격, Blue/White 디자인 토큰, 단계별 프롬프트 가이드 |
| **백엔드 / REST API** | `docs/api/` | `api_spec.md` | HTTP 메서드(GET/POST/PUT/DELETE), 엔드포인트 URL, JSON 요청/응답 스키마 |
| **데이터베이스 모델** | `docs/database/` | `db_schema.md` | Prisma Model 정의, 필드 제약조건, SQLite/RDB 타입 매핑, 마이그레이션 이력 |
| **트러블슈팅 & 회고** | `docs/troubleshooting/`| `troubleshooting.md`| 개발 중 발생한 오류 로그 분석, 원인 파악, 단계별 디버깅 및 해결 솔루션 |

---

## 3. 문서 작성 원칙 및 컨벤션

1. **문서 저장 위치**:
   - 회차별 폴더(`dayXX/`)를 생성하지 않고, 반드시 해당 문서의 성격에 맞는 `design/`, `api/`, `database/`, `troubleshooting/` 폴더에 문서를 저장합니다.
2. **언어 및 주석**:
   - 문서는 **한국어**를 기본으로 작성하며, 핵심 기술 용어는 영어 원문을 병기합니다. (예: 마이그레이션(Migration), 엔드포인트(Endpoint))
3. **이모지(Emoji) 사용 금지**:
   - 프로젝트 공통 컨벤션(`AGENTS.md`)에 따라 문서 내 모든 영역에서 이모지를 사용하지 않습니다.
4. **들여쓰기 및 포맷**:
   - 들여쓰기는 **공백 2칸(2 spaces)** 을 엄수합니다.
   - 표(Table)와 마크다운 코드 블록을 사용하여 시각적 구조화를 유지합니다.

---

## 4. 전체 문서 색인 (Documentation Index)

| 분류 | 폴더 | 문서명 | 파일 링크 | 주요 내용 |
| :--- | :--- | :--- | :--- | :--- |
| **화면 / UI / UX** | `design/` | `design_spec.md` | [`docs/design/design_spec.md`](./design/design_spec.md) | Clean Blue & White 디자인 시스템 연동 Todo 리스트 UI/UX 설계 및 인라인 수정 명세 |
| **백엔드 / REST API** | `api/` | `api_spec.md` | [`docs/api/api_spec.md`](./api/api_spec.md) | Express + Prisma CRUD REST API 엔드포인트 및 JSON 스키마 |
| **데이터베이스 모델** | `database/` | `db_schema.md` | [`docs/database/db_schema.md`](./database/db_schema.md) | Prisma ORM & SQLite Todo 테이블 설계 및 마이그레이션 이력 |
| **트러블슈팅 & 회고** | `troubleshooting/` | `troubleshooting.md` | [`docs/troubleshooting/troubleshooting.md`](./troubleshooting/troubleshooting.md) | 인코딩(`chcp 65001`), JSON 파싱 미들웨어, 타입 캐스팅 에러 해결 |
