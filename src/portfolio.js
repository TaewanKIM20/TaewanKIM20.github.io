import experiences from './data/experiences'

const header = {
  homepage: '#top',
  title: 'TAEWAN KIM',
}

const about = {
  eyebrow: 'BACKEND · PLATFORM · AI INTEGRATION',
  name: '김태완',
  headline: '끝까지 작동하는\n제품을 만듭니다.',
  description:
    '백엔드를 중심으로 설계부터 배포와 운영까지 연결하는 엔지니어입니다.',
  detail:
    '서비스 출시, 창업, 산학협력과 플랫폼 기획 경험을 바탕으로 현재 StarLab AGIT와 Popvia를 개발하고 있습니다.',
  photo: '/assets/profile/profile.png',
  photoFallback: '/assets/profile/profile-placeholder.svg',
  resume:
    'https://acrobat.adobe.com/id/urn:aaid:sc:AP:3a31aabe-4778-4fec-9459-489894b285c8',
  social: {
    linkedin: 'https://www.linkedin.com/in/taewan-kim-29539a297/',
    github: 'https://github.com/TaewanKIM20',
  },
  facts: [
    { label: 'FOCUS', value: 'Backend · Platform · AX' },
    { label: 'CURRENT', value: 'StarLab AGIT Developer' },
    { label: 'BASE', value: 'Seoul, Korea' },
  ],
}

const profileHighlights = {
  education: '성균관대학교 · 2026.02 졸업',
  certifications: ['AWS Solutions Architect – Associate', '정보처리기사', 'TOPCIT 3수준'],
  award: '2026 내일로 해커톤 장려상',
}

const projectCatalog = [
  {
    name: 'StarLab Code (AGIT)',
    image: '/assets/projects/agit-teacher-home.png',
    imageAlt: 'AGIT 선생님용 반 현황 대시보드 화면',
    category: 'Learning Platform',
    year: '2026',
    state: '운영 중 · V2 개발 중',
    role: '프로젝트 리드 · 인프라 및 시스템 설계',
    focus: ['제품 기획', '시스템 설계', '백엔드', 'AI 안전성'],
    statusTone: 'active',
    architecture: ['React · Desktop', 'FastAPI API', 'PostgreSQL', 'Render · Cloudflare'],
    journey: ['외부 채점 중단', 'MVP 시연', '브라우저 채점', '운영·측정'],
    facts: [
      { label: 'PERIOD', value: 'V1 2026.04—07' },
      { label: 'TEAM', value: '4인 TF · 프로젝트 리드' },
      { label: 'SCALE', value: '475 commits · 15 tables' },
      { label: 'DEPLOY', value: 'Render · Supabase · Cloudflare' },
    ],
    description:
      '중·고등학생 코딩 교육을 위한 웹·데스크톱 플랫폼. 외부 채점기 중단을 계기로 직접 MVP를 만들고, 4인 TF를 이끌어 운영 단계까지 확장했습니다.',
    decision:
      '서버 병목을 증설로 풀지 않고 Python·C 채점을 학생 브라우저의 Web Worker와 WASM으로 옮겼습니다.',
    results: ['서버 채점 CPU 0', '재제출 전송량 108MB → 0MB', '프로덕션 데이터 행 수 100% 대조'],
    details: [
      {
        title: '제품 기획 · 동작하는 MVP로 조직을 설득',
        text: '기존 백준 연동이 중단되자 외부 서비스에 의존하지 않는 자체 채점·관리 시스템을 제안했습니다. 개발 조직이 아닌 학원에서 의사결정을 끌어내기 위해 먼저 혼자 MVP를 제작하고 시연한 뒤 4인 TF를 구성했습니다. 이후 알고리즘 채점뿐 아니라 COS 실기 연습과 학부모 리포트까지 같은 학습 흐름 안에 묶어 제품 범위를 확장했습니다.',
      },
      {
        title: '시스템 설계 · 채점 위치를 서버에서 브라우저로',
        text: 'Python은 Pyodide, C는 clang WASM을 Web Worker에서 실행해 학생 PC의 유휴 자원을 사용하도록 설계했습니다. 숨김 테스트케이스는 평문 정답 대신 정규화한 sha256 해시만 전달하고, CSP나 브라우저 제약으로 로컬 실행이 불가능할 때만 서버 잡 큐로 폴백합니다. 무료 인프라의 CPU 한계를 증설이 아니라 실행 위치 변경으로 해결했습니다.',
      },
      {
        title: '백엔드 · 운영 데이터와 권한 경계 재설계',
        text: 'FastAPI·SQLModel 기반으로 관리자·선생님·학생 권한과 반 단위 데이터 격리를 구성했습니다. 8개에서 15개 테이블로 확장할 때 목표 DDL을 단일 원본으로 두고 실제 DB와 양방향 패리티 테스트를 만들었습니다. 백업·복원 리허설, 컷오버, 테이블별 행 수 대조를 거쳐 프로덕션 데이터를 잃지 않고 스키마를 교체했습니다.',
      },
      {
        title: 'AI · 데이터 반출 범위에 따라 모델을 분리',
        text: '학부모 학습 리포트는 익명화한 학습 지표만 Gemini에 전달하고, 제출 코드 안의 프롬프트 인젝션을 무시하도록 지시와 Pydantic 출력 상한을 함께 적용했습니다. 반대로 AI 부정사용 탐지는 학생 코드와 정답이 외부로 나가지 않도록 로컬 Ollama로 참조 답안을 만들고, 실제 제출 경로에서는 코드 지문·텔레메트리·또래 분포를 규칙 기반으로 1~3ms 안에 계산합니다.',
      },
      {
        title: '검증 · 실제 교실 트래픽을 숫자로 재현',
        text: '별도 Playwright 벤치마크로 p95, 전송량, 캐시 적중과 폴백률을 측정했습니다. 이 과정에서 105MB clang 툴체인이 브라우저 캐시 상한 때문에 매번 다시 내려받는 문제를 발견해 Cache API 우회와 메모리·IndexedDB 2단 캐시를 적용했습니다. C 재제출 전송량을 108MB에서 0MB로, 실행 시간을 9.5초에서 2.5초로 줄였습니다.',
      },
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'WebAssembly', 'PostgreSQL'],
  },
  {
    name: 'Popvia',
    image: '/assets/projects/popvia.svg',
    imageAlt: 'Popvia 팝업 탐색과 경로 최적화 플랫폼 커버 이미지',
    category: 'Route Planning Platform',
    year: '2026',
    state: 'MVP 완료 · 개발 중',
    role: '풀스택 개발 · AX · 경로 생성 API',
    focus: ['제품 기획', '경로 최적화', '백엔드', '크로스플랫폼'],
    statusTone: 'building',
    architecture: ['Expo App', 'Express API', 'Routing Providers', 'MySQL · Kakao Map'],
    journey: ['팝업 탐색', '다중 선택', '방문 순서 최적화', '구간별 길 안내'],
    facts: [
      { label: 'PERIOD', value: '2026.07 — NOW' },
      { label: 'ROLE', value: 'Full-stack · AX' },
      { label: 'MVP', value: 'Frontend + Route API' },
      { label: 'STATUS', value: '팝업 DB 정리 진행 중' },
    ],
    description:
      '서울 팝업 정보를 탐색하고 선택한 장소를 최소 이동 동선으로 묶어, 방한 관광객과 국내 사용자에게 방문 순서와 구간별 경로를 제공하는 창업 프로젝트입니다.',
    decision:
      '방문 순서는 직선거리로 최적화하고 실제 경로 API는 확정된 N개 구간에만 호출해, 호출량을 N²에서 N으로 줄였습니다.',
    results: ['경로 API 호출 N² → N', '7개 이하 최적해 · 8개 이상 휴리스틱', 'React Native 웹·앱 MVP'],
    details: [
      {
        title: '제품 기획 · 흩어진 팝업 정보와 동선을 연결',
        text: '팝업 정보는 SNS에 흩어져 있고 사용자는 짧은 운영 기간 안에 방문 동선을 직접 짜야 한다는 문제에서 출발했습니다. 팝업의 위치·운영시간·태그·이미지를 구조화하고, 여러 장소 선택부터 최적 방문 순서·현지 가이드 매칭까지 하나의 여행 흐름으로 설계했습니다. 중국어권 방한 관광객을 우선 타깃으로 잡아 한국어·영어·중국어 번역 경계도 함께 준비했습니다.',
      },
      {
        title: '알고리즘 · 정확도와 API 비용을 방문 규모로 분기',
        text: '모든 지점 쌍을 경로 API로 계산하면 호출량이 N²으로 늘어 무료 티어에서 바로 병목이 됩니다. 순서 결정에는 하버사인 거리를 사용하고, 팝업 7개 이하는 전수 순열로 최적해를 찾으며 8개 이상은 최근접 이웃과 2-opt로 개선합니다. 실제 도보·대중교통 API는 결정된 순서의 N개 구간에만 호출합니다.',
      },
      {
        title: '백엔드 · 교체 가능한 경로 프로바이더 계약',
        text: 'Express의 POST /api/routes/plan을 인증과 DB 저장이 없는 무상태 계산 API로 만들었습니다. free·TMAP·ORS 프로바이더가 같은 planLegs 계약을 구현하고 환경변수 하나로 교체됩니다. NO_API_KEY와 UNSUPPORTED_MODE를 구분해 상위 계층이 오류 원인과 무료 프로바이더 폴백 여부를 판단할 수 있게 했습니다.',
      },
      {
        title: '데이터 설계 · 서버 원본과 임시 로컬 데이터를 구분',
        text: '팝업 스팟은 MySQL과 Sequelize가 원본이며 Location·PopupDetail·Image·OperatingHour·Tag 관계를 프론트 타입과 동일한 형태로 반환합니다. 아직 모델이 없는 예약·리뷰·가이드 프로필은 AsyncStorage로 흐름만 유지했습니다. 어느 데이터가 실제 서버 소유이고 어느 것이 MVP용 임시 구현인지 API 계층에 명시했습니다.',
      },
      {
        title: '현재 범위 · 동작하는 MVP와 남은 제품화 과제',
        text: 'Base44 웹 프로토타입을 React Native·Expo 앱으로 재구현하고 Kakao 지도를 네이티브와 웹 구현으로 분리했습니다. 팝업 탐색과 경로 생성 MVP는 동작하지만 팝업 DB 정리, 예약·리뷰·가이드 백엔드, 결제와 실제 FCM 발송은 진행 중입니다. 무료 번역·경로 API의 정식 서비스 교체 지점도 기술 부채로 기록했습니다.',
      },
    ],
    stack: ['React Native', 'Node.js', 'Express', 'Sequelize', 'Kakao Maps'],
    sourceCode: 'https://github.com/Popvia-app',
  },
  {
    name: 'MeetingGo',
    image: '/assets/projects/meetinggo.svg',
    imageAlt: 'MeetingGo 플랫폼 커버 이미지',
    category: 'Production Backend',
    year: '2023—24',
    state: '서비스 종료 · 운영 완료',
    role: '백엔드 개발 · AWS 배포 및 운영',
    focus: ['제품 흐름', '도메인 설계', '백엔드', '실시간 · 보안'],
    statusTone: 'sunset',
    architecture: ['Flutter App', 'Express REST', 'Socket.io · FCM', 'MySQL · S3'],
    journey: ['3중 인증', '팀 생성', '매칭 수락', '채팅·약속'],
    facts: [
      { label: 'PERIOD', value: '2023.12—2024.09' },
      { label: 'TEAM', value: '4인 · 백엔드 전 영역' },
      { label: 'CONTRIBUTION', value: '94 commits' },
      { label: 'RELEASE', value: 'iOS · Android v1.0.6' },
    ],
    description:
      '대학생 팀 단위 매칭 모바일 서비스. 유저·팀·매칭·채팅·관리자 도메인의 API와 AWS 운영을 맡았습니다.',
    decision:
      'REST 상태 변경과 Socket.io 실시간 채팅을 결합하고, 접속 상태를 인지하는 FCM 알림 흐름을 설계했습니다.',
    results: ['iOS · Android 정식 출시', '94 commits', 'UUID · 토큰 회전 · 감사 로그'],
    details: [
      {
        title: '제품 흐름 · 신뢰할 수 있는 대학생 팀 매칭',
        text: '개인 소개팅이 아니라 팀을 만들고 상대 팀에 오퍼를 보내 수락 후 약속을 잡는 전체 여정을 백엔드 관점에서 구체화했습니다. 학교 이메일·휴대폰·학생증의 3중 인증으로 대학생 신뢰를 확보하고, 팀 생성·검색·좋아요·매칭·채팅·신고가 끊기지 않는 생명주기를 설계했습니다.',
      },
      {
        title: '설계 · 상태와 관계가 많은 도메인을 정리',
        text: '유저·팀·채팅방의 다대다 관계와 팀 간 자기참조 매칭 관계를 Sequelize associations 한 곳에서 관리했습니다. 매칭은 대기·수락·거절·완료 상태로 모델링하고, 상태 변경은 REST로, 대화와 약속·장소 공유는 Socket.io 룸 이벤트로 분리해 데이터 변경과 실시간 전달의 책임을 구분했습니다.',
      },
      {
        title: '백엔드 · 서비스 전 영역을 하나의 API로 연결',
        text: '인증, 유저, 팀, 매칭, 채팅, 푸시, 신고·문의, 관리자 API까지 핵심 도메인 전반을 구현했습니다. 목록 규모가 커진 뒤에는 팀·메시지·매칭 조회에 limit/offset 페이지네이션을 적용하고 DB를 정규화했습니다. AWS EC2에 배포해 iOS·Android 정식 버전 1.0.6을 실제 운영했습니다.',
      },
      {
        title: '실시간 · 접속 상태를 이해하는 알림',
        text: 'Socket.io 접속 시 채팅방별 socketId와 lastSeen을 갱신하고, 메시지 발송 때 현재 방에 없는 사용자만 골라 FCM 멀티캐스트를 보냈습니다. 두 팀의 멤버 조회는 Promise.all로 병렬화해 알림 페이로드를 구성했습니다. 화면을 보고 있는 사용자에게 중복 푸시가 오는 문제를 제품 상태와 서버 상태를 연결해 해결했습니다.',
      },
      {
        title: '보안 · 출시 서비스의 공격 표면 축소',
        text: '순차 정수 ID를 UUID v4로 전환해 식별자 열거 가능성을 낮추고, access/refresh 토큰을 분리해 refresh 토큰을 DB에서 강제 폐기할 수 있게 했습니다. 비밀번호는 argon2로 강화하고 이미지 업로드는 S3 Presigned URL로 서버 부하를 분리했습니다. 민감한 관리자 행위는 권한을 나누고 Winston 감사 로그로 추적했습니다.',
      },
    ],
    stack: ['Node.js', 'Express', 'Socket.io', 'MySQL', 'AWS'],
    sourceCode: 'https://github.com/bannangco',
  },
  {
    name: 'Splash',
    image: '/assets/projects/splash.svg',
    imageAlt: 'Splash 예약 결제 플랫폼 커버 이미지',
    category: 'Payment & Booking',
    year: '2024—',
    state: '운영 중',
    role: '백엔드 기반 구축 · 예약 및 결제 연동',
    focus: ['운영 기획', '결제 설계', '백엔드', '데이터 정합성'],
    statusTone: 'active',
    architecture: ['고객 · 관리자', 'Express API', 'PortOne PG', 'MySQL · Mail'],
    journey: ['상품 선택', 'PG 원장 검증', '예약 확정', '센터 알림'],
    facts: [
      { label: 'OWNERSHIP', value: '백엔드 0→1 구축' },
      { label: 'CONTRIBUTION', value: '45 commits · 저장소 1위' },
      { label: 'DOMAIN', value: '인증 · 예약 · 결제 · 관리자' },
      { label: 'OPERATION', value: '실제 예약 발생' },
    ],
    description:
      '여러 수상레저 센터의 상품을 예약하고 결제하는 플랫폼 백엔드. 인증부터 결제, 예약, 관리자 통계까지 기반을 구축했습니다.',
    decision:
      'PG 승인 결과를 서버에서 다시 검증하고, 예약·결제·센터 알림을 하나의 일관된 완료 흐름으로 묶었습니다.',
    results: ['실제 예약 발생', 'PG 전환 완료', '센터별 운영 통계'],
    details: [
      {
        title: '제품 기획 · 서로 다른 센터를 하나의 운영 흐름으로',
        text: '가평 빠지·화성 요트·패들보드처럼 상품과 운영 방식이 다른 제휴 센터를 한 예약 경험으로 묶었습니다. 사용자는 상품 선택과 결제만 수행하고, 결제가 확인되면 센터와 본사에 예약 정보가 자동 전달되도록 현장 운영 동선을 제품 흐름에 반영했습니다.',
      },
      {
        title: '설계 · 결제와 예약의 상태를 함께 움직이기',
        text: 'Booking과 Payment를 서로 참조시키고 BOOK·PAID·CANCEL·USE·COMPLETE 상태를 모델에 명시했습니다. 결제 완료와 취소가 발생할 때 두 도메인의 상태가 함께 갱신되도록 흐름을 설계했습니다. 관리자 토큰의 사용자와 centerCode를 함께 검증해 센터별 데이터 경계를 유지했습니다.',
      },
      {
        title: '백엔드 · 인증부터 결제까지 0→1 구축',
        text: 'Node.js·Express·Sequelize로 인증, 예약, 결제, 문의, 관리자 API의 초기 골격을 구축했습니다. access/refresh 토큰을 분리하고 refresh 토큰을 사용자당 한 건만 유지해 재로그인 시 회전시켰습니다. 저장소 45개 커밋의 단일 최다 기여자로 결제와 운영 백엔드를 연결했습니다.',
      },
      {
        title: '결제 · 클라이언트를 신뢰하지 않는 검증',
        text: '운영 정책 변경에 따라 Toss Payments에서 PortOne으로 PG를 전환했습니다. 클라이언트의 성공 응답만으로 예약을 확정하지 않고 paymentId로 PortOne 원장을 서버에서 다시 조회해 PAID 상태를 확인한 뒤 예약·결제 레코드와 센터 알림을 생성했습니다. 주문 금액과 실결제 금액 대조는 후속 보강 과제로 명시했습니다.',
      },
      {
        title: '운영 · 현장에서 필요한 데이터까지 정리',
        text: '상품 코드별 수량 계산과 HTML 메일 템플릿을 분리해 신규 센터 온보딩 범위를 좁혔습니다. 센터별 예약·매출·수량 통계를 제공하고, 리버스 프록시 뒤에서도 실제 사용자 IP를 남기며 모든 예약 시각을 KST로 통일했습니다. 분기 중복은 향후 템플릿 엔진으로 옮길 기술 부채로 남겼습니다.',
      },
    ],
    stack: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'PortOne'],
    sourceCode: 'https://github.com/bannangco',
  },
  {
    name: 'ASKku',
    image: '/assets/projects/askku.svg',
    imageAlt: 'ASKku 개인화 RAG 플랫폼 커버 이미지',
    category: 'Personalized RAG',
    year: '2025',
    state: '구현 완료',
    role: '백엔드 리드 · 인증 및 RAG 통합',
    focus: ['AI 제품 기획', 'RAG 설계', '백엔드', 'LLM 안정성'],
    statusTone: 'complete',
    architecture: ['Web Client', 'Express Gateway', 'FastAPI · LangChain', 'ChromaDB · MySQL'],
    journey: ['공지 증분 수집', '사용자 맥락 결합', 'RAG 검색', 'SSE 답변'],
    facts: [
      { label: 'TEAM', value: '5인 · 백엔드 리드' },
      { label: 'CONTRIBUTION', value: '14 commits · 11 merges' },
      { label: 'DATA', value: '학과 · 기숙사 · 대학 공지' },
      { label: 'BRIDGE', value: 'Node ↔ Python · SSE' },
    ],
    description:
      '학교 공지와 학사 정보를 사용자의 시간표·캘린더에 맞춰 답하는 성균관대 학생용 개인화 RAG 챗봇입니다.',
    decision:
      'Express가 인증과 데이터를, FastAPI가 검색과 추론을 담당하는 2-tier 구조로 나누고 SSE로 응답을 중계했습니다.',
    results: ['5인 팀 백엔드 리드', 'Node ↔ Python 통합', '증분 크롤링 · SSE'],
    details: [
      {
        title: '제품 기획 · 검색을 개인의 다음 행동으로 연결',
        text: '학교 공지를 단순히 찾아주는 챗봇보다 학생마다 지금 필요한 답이 달라지는 문제에 집중했습니다. 공식 문서뿐 아니라 시간표와 캘린더를 함께 사용해 시험 일정, 해야 할 일, 졸업 요건을 개인 맥락에 맞춰 답하고, 대화 속 일정 등록과 북마크 제목 생성까지 후속 행동으로 연결했습니다.',
      },
      {
        title: '설계 · 웹 API와 AI 추론의 책임 분리',
        text: 'Express는 인증·CRUD·API 게이트웨이를, FastAPI는 검색·임베딩·LLM 추론을 담당하는 2-tier 구조로 나눴습니다. Node와 Python이 같은 JWT 시크릿과 HS256 규칙을 사용하고 Authorization 헤더를 전달해 AI 서버도 사용자를 독립적으로 검증하도록 신뢰 경계를 맞췄습니다.',
      },
      {
        title: '백엔드 · 데이터 모델과 스트리밍 통합',
        text: 'Sequelize로 사용자·대화·메시지·시간표·캘린더·북마크 스키마와 CRUD를 설계했습니다. FastAPI가 sources·content·done 이벤트를 SSE로 보내면 Express가 axios stream을 버퍼링 없이 그대로 중계합니다. 프론트엔드는 하나의 인증된 엔드포인트만 사용하면서 답변과 출처를 실시간으로 받을 수 있습니다.',
      },
      {
        title: 'AI · 근거와 우선순위를 통제하는 RAG',
        text: '학과·기숙사·대학 공지를 증분 크롤링해 ChromaDB에 중복 없이 임베딩했습니다. 답변 근거가 충돌할 때는 캘린더 → 시간표 → 공식 문서 → 대화 이력 순으로 따르도록 프롬프트 규칙을 명시하고, 근거에 없는 정보는 추측하지 않게 했습니다. 범용 검색을 개인 일정에 맞는 판단 재료로 바꾼 설계입니다.',
      },
      {
        title: 'LLM 안정성 · 비결정적 출력을 제품 데이터로',
        text: '일정 추출 응답에 코드펜스·스마트 따옴표·앞뒤 설명이 섞여 JSON 파싱이 깨지는 문제를 다단 정제와 보수적 객체 추출로 방어했습니다. 단일 객체는 배열로 감싸 재시도해 캘린더 저장 실패를 줄였습니다. 5인 팀에서는 백엔드 리드로 DB 리팩터링과 Node↔Python 병합, PR 리뷰를 총괄했습니다.',
      },
    ],
    stack: ['Express', 'FastAPI', 'LangChain', 'ChromaDB', 'MySQL'],
    sourceCode: 'https://github.com/campus-aisearch',
  },
  {
    name: 'Voluntain',
    image: '/assets/projects/voluntain.svg',
    imageAlt: 'Voluntain 온라인 코딩 교육 플랫폼 커버 이미지',
    category: 'Education Platform',
    year: '2024',
    state: 'v4 구현 완료 · 배포 예정',
    role: '풀스택 개발 · 자체 인증 및 Q&A',
    focus: ['교육 기획', '레거시 개선', '백엔드', 'Headless CMS'],
    statusTone: 'complete',
    architecture: ['Next.js Static', 'Strapi REST', 'Relational Content', 'AWS S3'],
    journey: ['강의 시청', '강의별 질문', '답변·조회', '이어 학습'],
    facts: [
      { label: 'PERIOD', value: '2024.07 —' },
      { label: 'TEAM', value: '웹개발팀 3인' },
      { label: 'VERSION', value: 'v4 기능 구현 완료' },
      { label: 'DEPLOY', value: 'S3 · 도메인 연결 예정' },
    ],
    description:
      '성균관대 소프트웨어학과 해외봉사 교육을 일회성 활동에서 지속 가능한 온라인 코딩 교육으로 전환한 웹 플랫폼입니다.',
    decision:
      'Disqus 의존을 제거하고 사용자·강의·질문·답변 관계를 직접 소유하는 인증 및 Q&A 도메인으로 재설계했습니다.',
    results: ['Disqus 의존 제거', '자체 인증 · 강의 연동 Q&A', 'Next.js 정적 빌드 · S3 구조'],
    details: [
      {
        title: '제품 기획 · 일회성 봉사를 지속적인 학습으로',
        text: '해외 현장에서 끝나는 코딩 교육을 강의 영상·질의응답·이어 학습이 가능한 상시 플랫폼으로 전환했습니다. Scratch와 Python 강의를 제공하고 개발도상국 학생이 강의 맥락 안에서 한국 학생에게 질문할 수 있도록 학습과 소통을 하나의 제품 흐름으로 묶었습니다.',
      },
      {
        title: '레거시 개선 · 외부 댓글 서비스를 자체 도메인으로',
        text: '기존 v2·v3는 Disqus에 질문 데이터를 맡겨 강의별 연결과 데이터 소유가 불가능했습니다. Disqus API를 제거하고 Strapi에 auth·qna·answer 컬렉션과 lecture 관계를 새로 구성했습니다. 강의별 질문, 내가 작성한 질문, 질문별 답변을 플랫폼 내부 데이터로 조회할 수 있게 했습니다.',
      },
      {
        title: '백엔드 · Headless CMS를 도메인 API로 확장',
        text: 'Strapi 기본 화면만 사용하는 대신 findByLecture·findByUserId·findAndIncrementViews 커스텀 컨트롤러와 라우트를 구현했습니다. 기본 users-permissions 대신 auth 컬렉션을 두고 이메일 중복 검사와 bcrypt 해싱 기반 가입·로그인을 직접 구성했습니다. 사용자에 국가·학교·학년 필드를 두어 향후 교육 운영 통계를 준비했습니다.',
      },
      {
        title: '프론트엔드 · 정적 배포 제약 안에서 학습 상태 유지',
        text: 'Next.js 11을 next export로 정적 빌드해 AWS S3에 올리는 비용 효율적 구조를 선택했습니다. 서버 세션이 없는 환경에서 React Context와 localStorage로 인증 상태를 복원하고, 손상된 저장값은 예외 처리했습니다. 강의 재생 위치는 쿠키에 기록해 다음 방문에서 이어 볼 수 있게 했습니다.',
      },
      {
        title: '현재 범위 · 기능 완료와 배포 상태를 분리',
        text: '3인 웹개발팀에서 자체 인증·Q&A·마이페이지·이어 학습까지 v4 핵심 기능을 구현했습니다. 프로덕션 도메인 연결과 라이브 세션 정식 편입은 아직 완료되지 않았습니다. 기능 구현 완료와 실제 서비스 운영을 구분해 상태를 표시했습니다.',
      },
    ],
    stack: ['Next.js', 'Strapi', 'React', 'bcryptjs', 'AWS S3'],
    sourceCode: 'https://github.com/Voluntain-SKKU/Voluntain-v4',
  },
  {
    name: 'AI Job Pipeline',
    image: '/assets/projects/ai-job-pipeline.svg',
    imageAlt: 'AI Job Pipeline 관측성 플랫폼 커버 이미지',
    category: 'Distributed Systems',
    year: '2026',
    state: 'Phase 1 완료',
    role: '아키텍처 · 관측성 파이프라인 · 상태 머신',
    focus: ['플랫폼 기획', '분산 설계', '백엔드', '관측성'],
    statusTone: 'building',
    architecture: ['Nginx Gateway', 'FastAPI × 2', 'PostgreSQL · Redis', 'Loki · Grafana'],
    journey: ['경계 설계', 'Trace ID 전파', '로그 수집', 'Phase 2 예정'],
    facts: [
      { label: 'PERIOD', value: '2026.04—06' },
      { label: 'TEAM', value: '4인 · 최초/최다 기여' },
      { label: 'DOCUMENT', value: 'Architecture ADR 3건' },
      { label: 'STATUS', value: 'Phase 1 기반·관측성 완료' },
    ],
    description:
      '분산 작업 처리와 관측성을 함께 설계한 플랫폼. 클라우드 비용 없이 운영 환경에 가까운 서비스 경계를 재현했습니다.',
    decision:
      'Compose 네트워크로 public/private 경계를 만들고, 기능보다 trace ID·구조화 로그·수집 파이프라인을 먼저 완성했습니다.',
    results: ['7-service local stack', 'Loki · Grafana 추적', '상태 전이 행렬 · ADR'],
    details: [
      {
        title: '플랫폼 기획 · 운영을 배우는 분산 시스템',
        text: '작업 큐 기능만 구현하는 데서 그치지 않고, 장애가 났을 때 원인을 찾고 복구할 수 있는 플랫폼을 학습 목표로 정의했습니다. AWS 비용 없이도 VPC 경계, 다중 API 인스턴스, 워커, 저장소와 관측 스택을 한 번에 재현할 수 있도록 개발 환경 자체를 제품처럼 설계했습니다.',
      },
      {
        title: '설계 · 클라우드 경계를 로컬 네트워크로 재현',
        text: 'Docker Compose의 public/private 네트워크로 VPC의 공개·비공개 서브넷을 모사했습니다. Nginx만 양쪽 네트워크에 연결해 유일한 외부 진입점으로 두고, FastAPI·워커·PostgreSQL·Redis는 호스트에 포트를 열지 않았습니다. 애플리케이션과 관측 인프라 Compose를 분리하고 결정 근거와 대안을 ADR 3건으로 남겼습니다.',
      },
      {
        title: '백엔드 · 정책은 데이터로, 무결성은 DB로',
        text: 'PostgreSQL·SQLAlchemy async·Alembic으로 작업 타입, 작업, 결과, DLQ의 데이터 모델을 구성했습니다. 작업 타입별 최대 재시도와 타임아웃은 JSONB 설정 행으로 관리하고, idempotency_key의 유니크 제약으로 중복 제출을 DB에서 차단합니다. 상태 전이는 행렬로 선언해 불가능한 변경을 단위 수준에서 거부합니다.',
      },
      {
        title: '관측성 · 요청 하나를 서비스 전체에서 추적',
        text: 'ContextVar로 trace_id를 전파하고 모든 서비스 로그를 구조화 JSON으로 통일했습니다. Fluent Bit이 Docker 외곽 JSON과 앱 내부 JSON을 두 번 파싱해 Loki로 보내고, Grafana datasource와 대시보드는 provisioning으로 자동 복원됩니다. Loki 비용을 고려해 service·level만 라벨로 두고 trace_id는 본문 검색으로 조회합니다.',
      },
      {
        title: 'AI 범위 · 이름과 현재 구현을 분리해 기록',
        text: '현재 완료된 Phase 1은 AI 작업을 안정적으로 실행할 기반과 관측성까지입니다. Prompt Registry·출력 검증·비용 추적 같은 AI 관측 기능과 Redis 큐 소비, 재시도·DLQ 적재는 아직 구현되지 않았습니다. 설계한 기능과 실제 동작하는 기능을 구분해 문서화하고, 다음 단계의 완료 조건을 명확히 남겼습니다.',
      },
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Grafana'],
    sourceCode:
      'https://github.com/Project-Hamming/Distributed-Job-Processing-AI-Observability-Platform',
  },
  {
    name: 'Jeju-Bali',
    image: '/assets/projects/jeju-bali.png',
    imageAlt: '제주 원료 기반 화장품을 추천하는 Jeju-Bali 제품 이미지',
    category: 'AI Skin Analysis',
    year: '2026',
    state: '해커톤 MVP · 배포 구성 완료',
    role: '아키텍처 · Node 게이트웨이 · RAG · 배포',
    focus: ['AI 제품 기획', 'CV 모델', 'RAG 설계', '백엔드'],
    statusTone: 'hackathon',
    architecture: ['Expo App', 'Node Gateway', 'PyTorch Inference', 'RAG · OpenWeather'],
    journey: ['사진·위치 입력', '피부 지표 분석', '근거 검색', '제품 추천'],
    facts: [
      { label: 'PERIOD', value: '2박 3일' },
      { label: 'SYSTEM', value: 'App + 3 Backend Processes' },
      { label: 'DATA', value: 'AI Hub 21GB' },
      { label: 'TRAINING', value: 'RTX 3050 · 4GB VRAM' },
    ],
    description:
      '사진 한 장에서 피부 상태를 분석하고 현재 기상·대기질과 제주 원료 지식을 결합해 맞춤 화장품을 추천하는 크로스플랫폼 앱입니다.',
    decision:
      'LLM에게 추천 전체를 맡기지 않고 자체 학습한 피부 지표, 실시간 환경 데이터, 검색된 제주 원료 근거만으로 추천 JSON을 조립하게 했습니다.',
    results: ['2박 3일 · 4개 프로세스 통합', '21GB AI Hub 데이터 선별 학습', 'Render Blueprint · 서비스 간 인증'],
    details: [
      {
        title: '제품 기획 · 제주와 바이오를 하나의 사용자 흐름으로',
        text: '해커톤의 바이오×AI 주제를 피부 상태 측정과 제주 원료 추천으로 구체화했습니다. 제주라는 지역성은 원료 지식으로, 바이오는 피지·색소침착·홍반 측정으로 해석하고, 여기에 사용자의 현재 습도·자외선·미세먼지를 더했습니다. 카메라 촬영부터 분석, 추천 근거 확인까지 하나의 엔드투엔드 경험을 2박 3일 안에 완성하는 범위를 잡았습니다.',
      },
      {
        title: '설계 · 무거운 추론과 비싼 LLM을 분리',
        text: 'React Native 앱은 Node.js 게이트웨이 한 곳만 호출하고, 게이트웨이 뒤에서 PyTorch 추론 FastAPI와 RAG FastAPI를 조합하도록 3-tier로 설계했습니다. 모델 체크포인트는 프로세스 시작 시 한 번만 로드하고, LLM 배포와 API 게이트웨이 변경이 서로 영향을 덜 주도록 경계를 나눴습니다. 공개 Render URL 사이에는 x-internal-api-key 상호 인증을 적용했습니다.',
      },
      {
        title: '백엔드 · 분석부터 추천까지 계약을 연결',
        text: 'multer 메모리 업로드로 받은 이미지를 추론 서비스에 전달하고, raw 회귀 출력을 0~100 점수·밴드·요약으로 바꾸는 프로파일 계층을 두었습니다. 이후 위치 좌표로 OpenWeather 날씨와 대기질을 조회하고 피부 프로파일과 함께 RAG 서버에 전달했습니다. 진단 엔드포인트와 실행 스크립트를 마련해 앱→Node→Python 구간 중 어디가 실패했는지 빠르게 분리했습니다.',
      },
      {
        title: 'AI · 도메인 데이터로 직접 학습하고 근거로 추천',
        text: '한국인 피부 기준과 비용을 고려해 상용 비전 API 대신 AI Hub 21GB 데이터로 ResNet18 멀티태스크 회귀 모델을 직접 학습했습니다. 결측 라벨은 0으로 채우지 않고 제외했으며 train 기준 z-score로 검증 누수를 막았습니다. 피지는 FaceMesh로 볼 영역을 잘라 별도 모델에 넣고, 실패하면 비율 크롭으로 폴백했습니다. RAG는 실측 피부 지표·환경 데이터·제주 원료 문서만 근거로 gpt-4o-mini가 구조화 추천을 조립하게 했습니다.',
      },
      {
        title: '제약과 한계 · 설계와 실제 배포를 구분',
        text: 'RTX 3050 4GB에서도 학습할 수 있도록 유효 파일만 선택적으로 해제하고 데이터 규칙을 스크립트에 고정했습니다. Node 게이트웨이와 RAG 서버는 render.yaml 하나로 배포하도록 구성했지만, 체크포인트 용량 때문에 CV 추론 서비스는 로컬 실행으로 남았습니다. 따라서 아키텍처는 3-tier이고 실제 해커톤 배포는 2-tier였다는 한계를 명확히 기록했습니다.',
      },
    ],
    stack: ['React Native', 'Express', 'FastAPI', 'PyTorch', 'OpenAI'],
    sourceCode: 'https://github.com/jeju-bali/ax-jeju-bali',
  },
  {
    name: 'Iriro',
    image: '/assets/projects/iriro.png',
    imageAlt: '교통약자를 위한 Iriro 공항 내비게이션 이미지',
    category: 'Accessible Navigation',
    year: '2026',
    state: '해커톤 MVP',
    role: '백엔드 단독 개발 · 앱 연동 및 다국어 통합',
    focus: ['접근성 기획', '안전 설계', '백엔드', 'AI 제어'],
    statusTone: 'hackathon',
    architecture: ['Expo · 3D Map', 'FastAPI', 'NetworkX', 'OpenAI · 공공데이터'],
    journey: ['접근성 프로필', '그래프 프루닝', '제한된 AI 랭킹', '환승 판정'],
    facts: [
      { label: 'PERIOD', value: '6일 MVP' },
      { label: 'TEAM', value: '2인 · 백엔드 단독' },
      { label: 'SCOPE', value: 'App · Admin · Backend' },
      { label: 'RESULT', value: '내일로 해커톤 장려상' },
    ],
    gallery: [
      {
        src: '/assets/projects/iriro-walk-1.png',
        alt: 'Iriro 이동 안내 캐릭터 화면 1',
        caption: '이동 단계별 안내 비주얼',
      },
      {
        src: '/assets/projects/iriro-walk-2.png',
        alt: 'Iriro 이동 안내 캐릭터 화면 2',
        caption: '경로 진행 상태 피드백',
      },
      {
        src: '/assets/projects/iriro-current-map.png',
        alt: 'Iriro 현재 위치 기반 실내 지도',
        caption: '현재 위치와 실내 경로 맥락',
      },
    ],
    description:
      '휠체어·교통약자를 위한 공항·철도 연계 실내 내비게이션. 백엔드 전 영역과 앱 연동을 담당했습니다.',
    decision:
      'LLM은 경로를 만들지 않고 이미 검증된 그래프 후보의 순위와 설명만 맡겨, 실패가 안전 문제로 번지지 않게 했습니다.',
    results: ['내일로 해커톤 장려상', '6일 내 MVP 완주', '4개 언어 지원'],
    details: [
      {
        title: '제품 기획 · 철도 환승의 접근성 사각지대',
        text: '철도패스 자체보다 인천공항에서 공항철도로 환승하는 실제 이동 경험에 집중했습니다. 휠체어·유모차·고령자와 외국인 여행자가 계단, 고장난 엘리베이터, 혼잡을 피해 열차 시간에 맞출 수 있도록 접근성 프로필·3D 길 안내·환승 가능 판정을 하나의 흐름으로 기획했습니다.',
      },
      {
        title: '설계 · 지도와 경로 계산의 단일 원본',
        text: '실내 지도 공개 API가 없어 그래프를 직접 저작하되, 프론트 TypeScript 지도 데이터를 유일한 원본으로 정했습니다. export 스크립트가 백엔드용 노드·간선 JSON을 생성해 3D 렌더링과 NetworkX 라우팅이 같은 ID를 사용하게 했습니다. 시설 상태를 관리자가 바꾸면 고장 엘리베이터 같은 제약이 즉시 경로 계산에 반영됩니다.',
      },
      {
        title: '백엔드 · 경로·공공데이터·VoC를 단독 구현',
        text: 'FastAPI에서 접근성 프로필별 그래프 프루닝, 후보 경로 생성, 열차 환승 SAFE·TIGHT·IMPOSSIBLE 판정과 공공데이터 5종 연동을 구현했습니다. 이동 중 민원에는 route_id·edge_id·floor·position을 함께 저장해 나중에 특정 구간과 문제를 연결할 수 있게 했습니다. 2인 팀에서 백엔드 전 영역과 앱 API 연동·4개 언어 통합을 맡았습니다.',
      },
      {
        title: 'AI · 경로 생성이 아닌 제한된 랭킹',
        text: 'NetworkX가 계단과 고장 시설을 제거한 유효 후보만 먼저 만들고, OpenAI Structured Outputs는 그 후보의 순위와 안내 문구만 생성합니다. 응답에 포함된 노드가 실제 그래프에 있는지 백엔드가 다시 검증해 LLM 환각이 존재하지 않는 통로 안내로 이어지는 경로를 차단했습니다. VoC 분류도 같은 제한된 역할로 적용했습니다.',
      },
      {
        title: '복원력과 범위 · 실패해도 핵심 안내 유지',
        text: 'OpenAI와 공공데이터 호출을 타입 있는 실패로 감싸 규칙 기반 점수와 번들 JSON으로 자동 폴백했습니다. 6일 안에 앱·관리자·백엔드를 통합해 장려상을 받았지만, DB와 인증 없이 JSON·JSONL을 사용했고 실제 실내지도 API 연동과 배포는 진행하지 않았습니다. 해커톤 MVP의 강점과 프로덕션 이전 과제를 함께 명시했습니다.',
      },
    ],
    stack: ['FastAPI', 'React Native', 'Expo', 'Structured Outputs', 'SQLite'],
    sourceCode: 'https://github.com/Hackathon-0812',
  },
]

// 프로젝트 카드는 최근 경험부터 역순으로 표시합니다.
// 순서를 바꾸려면 아래 이름 배열만 수정하면 됩니다.
const projectOrder = [
  'StarLab Code (AGIT)',
  'Popvia',
  'Iriro',
  'Jeju-Bali',
  'AI Job Pipeline',
  'ASKku',
  'Voluntain',
  'Splash',
  'MeetingGo',
]

const projects = projectOrder.map((name) => projectCatalog.find((project) => project.name === name))

const skillGroups = [
  {
    number: '01',
    title: 'Backend',
    description: '서비스 경계와 데이터 정합성을 먼저 설계합니다.',
    items: ['Java', 'Python', 'Node.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    number: '02',
    title: 'Platform',
    description: '운영 가능한 배포와 관측 경로를 함께 만듭니다.',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki', 'Cloudflare'],
  },
  {
    number: '03',
    title: 'AI · Client',
    description: 'AI의 역할을 좁히고 제품 흐름 안에 안전하게 연결합니다.',
    items: ['RAG', 'LangChain', 'Ollama', 'PyTorch', 'React', 'TypeScript', 'React Native', 'WebAssembly'],
  },
]

const principles = [
  {
    title: '없는 것은 만듭니다.',
    description: '외부 채점기가 끊기면 자체 런타임을, 검증 도구가 없으면 벤치마크 하네스를 만듭니다.',
  },
  {
    title: '제약을 구조로 풉니다.',
    description: '비용·성능·보안 제약을 기능 축소보다 실행 위치와 서비스 경계를 바꾸는 문제로 봅니다.',
  },
  {
    title: '만든 것은 측정합니다.',
    description: 'p95, 전송량, 폴백률과 데이터 대조 결과로 판단을 검증하고 다음 변경으로 닫습니다.',
  },
]

const contact = {
  email: 'fnzk2019@g.skku.edu',
}

export { header, about, experiences, profileHighlights, projects, skillGroups, principles, contact }
