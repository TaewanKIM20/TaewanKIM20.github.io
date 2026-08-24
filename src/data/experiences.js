// 경력 타임라인 편집 파일
//
// 1. 화면에는 이 배열의 위에서 아래 순서대로 표시됩니다.
// 2. 같은 시기에 시작한 경험은 relation으로 연결 관계를 표시할 수 있습니다.
// 3. 항목 추가 시 아래 객체 하나를 복사해 내용만 수정하면 됩니다.
//    { period: '기간', organization: '조직명', role: '역할', description: '설명', relation: '선택 사항' }

const experiences = [
  {
    period: '2019.03',
    organization: '성균관대학교 입학',
    role: 'Software Engineering Undergraduate',
    description: '소프트웨어와 컴퓨터공학을 공부하며 백엔드, 클라우드, 알고리즘의 기반을 쌓았습니다.',
  },
  {
    period: '2023.12 — 2024.09',
    organization: 'BanNangCo · MeetingGo',
    role: 'Backend Developer',
    description: '대학생 매칭 앱의 API, 실시간 채팅과 AWS 배포를 개발해 iOS·Android 정식 출시까지 경험했습니다.',
  },
  {
    period: '2024.05 —',
    organization: 'Splash',
    role: 'Founder · Backend Developer',
    description: '수상레저 예약·결제 서비스를 창업하고, 인증부터 결제 검증과 운영 관리자 API까지 구축했습니다.',
  },
  {
    period: '2024.06 —',
    organization: 'Voluntain',
    role: 'Industry–Academic Cooperation Developer',
    description: '산학협력 프로젝트에서 기존 코드베이스를 리팩터링하고 사용자 API와 배포 구조를 개선했습니다.',
  },
  {
    period: '3 MONTHS',
    organization: 'PTKOREA',
    role: 'Platform Assistant Planning Intern',
    description: '플랫폼 보조 기획 인턴으로 서비스 운영과 기획 업무를 경험했습니다.',
  },
  {
    period: '2025',
    organization: 'ASKku',
    role: 'Backend Lead',
    description: '성균관대 학생용 개인화 RAG 서비스의 인증, 데이터 모델과 Node.js–FastAPI 통합을 맡았습니다.',
  },
  {
    period: '2026.02',
    organization: '성균관대학교 졸업',
    role: 'Bachelor’s Degree',
    description: '학업과 서비스 개발 경험을 연결하며 성균관대학교 학부 과정을 마쳤습니다.',
  },
  {
    period: '2026.04 — 2026.06',
    organization: 'AI Job Pipeline',
    role: 'Architecture · Observability',
    description: '분산 작업 처리 플랫폼의 네트워크 경계, 상태 머신과 Trace ID 기반 관측성 파이프라인을 설계했습니다.',
  },
  {
    period: '2026.07',
    organization: 'Jeju-Bali',
    role: 'AI Product · Backend Developer',
    description: '자체 학습 피부 분석 모델과 날씨·제주 원료 RAG를 연결한 AI 화장품 추천 MVP를 완성했습니다.',
  },
  {
    period: '2026.08',
    organization: 'Iriro',
    role: 'Backend Developer',
    description: '이동약자를 위한 공항·철도 내비게이션의 백엔드와 안전한 AI 경로 랭킹을 구현해 장려상을 받았습니다.',
  },
  {
    period: '2026.07 — NOW',
    organization: 'StarLab · AGIT',
    role: 'Platform Developer',
    description: '코딩 교육 플랫폼의 채점 시스템, 브라우저 샌드박스, 데이터 마이그레이션과 배포를 개발하고 있습니다.',
    relation: 'Jeju-Bali와 같은 시점에 시작',
  },
  {
    period: '2026.07 — NOW',
    organization: 'Popvia',
    role: 'Full-stack Developer',
    description: '관광·팝업 동선 최적화 앱의 React Native 클라이언트와 경로 계산 백엔드를 개발하고 있습니다.',
    relation: 'AGIT와 같은 시점에 시작',
  },
]

export default experiences
