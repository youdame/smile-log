# Smile Log 🌳🙂

**AI 기반 감정 분석 및 시각화 일기 서비스**

[**웹사이트 바로가기**](https://smile-log.vercel.app)  
**테스트 계정**:

- ID: `youdame`
- PW: `damdam2!`

** 저희 팀은 프론트엔드 서버를 JavaScript로 코드를 작성하여 별도의 Binary 파일이 없어, 대신 JavaScript 코드를 시제품으로 제출합니다.

---

## 📖 프로젝트 소개

**Smile Log**는 사용자가 작성한 일기를 바탕으로 감정을 분석하고 시각화하는 웹 애플리케이션입니다.  
감정 분석을 통해 자신의 감정을 명확히 인식하고, AI 챗봇과 대화를 통해 감정의 원인을 탐구하며 더 나은 자기 이해를 돕는 서비스를 제공합니다.

---

## 🚀 주요 기능

1. **일기 작성 및 감정 분석**

   - 사용자가 일기를 작성하면 **OpenAI API**를 통해 감정을 분석합니다.
   - 행복, 슬픔, 불안, 화남, 평온, 피곤 **6가지 감정**의 비율을 산출합니다.

2. **감정 시각화 (나무 시각화)**

   - 감정 분석 결과를 시각화하여 **나무의 가지 색상**으로 표현합니다.
   - 일별, 월별 감정 패턴을 직관적으로 파악할 수 있습니다.

3. **캘린더 감정 통계**

   - 일별 **최상위 감정**을 이모지로 캘린더에 표시합니다.
   - 월별 감정 통계를 통해 감정의 흐름과 패턴을 시각적으로 제공합니다.

4. **AI 챗봇과 감정 탐구**

   - 일기를 기반으로 감정 원인 및 다양한 감정 측면을 탐구하는 질문을 생성합니다.
   - 사용자는 대화를 통해 자기 감정을 심층적으로 이해하고 원인을 파악할 수 있습니다.

5. **사용자 인증 및 데이터 저장**
   - 로그인 및 회원가입 기능을 제공하며 사용자 데이터를 안전하게 관리합니다.
   - 감정 분석 및 일기 데이터는 데이터베이스에 저장됩니다.

---

## 🛠️ 기술 스택

- **Next.js**: 서버 사이드 렌더링(SSR)을 통해 빠른 데이터 로딩 및 페이지 전환 제공.
- **React**: 컴포넌트 기반 UI 개발 및 재사용성 강화.
- **TypeScript**: 정적 타입 체크를 통해 코드의 안정성 및 가독성 향상.

- **Next.js API Routes**: 감정 분석 및 챗봇 API와의 통신 처리.
- **OpenAI API**: 감정 분석 및 대화형 질문 생성.

### **배포**

- **Vercel**: Next.js와의 높은 호환성으로 빠르고 안정적인 배포 환경 제공.

---

## 📂 프로젝트 구조

```plaintext
src/
├─ api/                   # API 호출 관련 코드
│  ├─ auth/               # 사용자 인증 관련 API (로그인, 회원가입)
│  ├─ chat/               # 챗봇 API
│  ├─ diary/              # 일기 작성 및 감정 분석 API
│  └─ user/               # 사용자 정보 조회 API
├─ app/                   # Next.js 라우팅 및 API 라우트
│  ├─ api/                # 서버 API 라우트
│  ├─ calendar/           # 감정 캘린더 페이지
│  ├─ diary/              # 일기 작성 및 챗봇 기능
│  ├─ home/               # 홈 화면
│  ├─ tree/               # 감정 나무 시각화 페이지
│  └─ store/              # 전역 상태 관리
├─ components/            # 공통 및 세부 UI 컴포넌트
│  ├─ common/             # 공통 UI 컴포넌트 (버튼, 입력창 등)
│  ├─ diary/              # 일기 에디터
│  ├─ emotion/            # 감정 바 컴포넌트
│  └─ tree/               # 나무 시각화 캔버스
├─ constants/             # 감정 색상, 라벨 등의 상수 관리
├─ types/                 # 데이터 타입 정의
└─ utils/                 # 유틸리티 함수
```

⚙️ 환경 변수 설정
프로젝트 실행을 위해 아래의 환경 변수를 설정해야 합니다.

```bash
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_API_URL=your_api_url_here
```

🛠️ 실행 방법

1. 프로젝트 클론 및 의존성 설치

# 프로젝트 클론

```bash
git clone https://github.com/Smile-Log-App/Frontend.git
cd Frontend
```

# 의존성 설치

```
npm install
```

2. 개발 서버 실행

```
npm run dev
```

로컬 개발 서버가 http://localhost:3000에서 실행됩니다.

3. 프로덕션 빌드 및 배포

# 프로덕션 빌드

```
npm run build
```

# 빌드 결과 실행

```
npm start
```
