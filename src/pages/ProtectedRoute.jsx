import React from 'react'

export default function ProtectedRoute() {
  // 로그인한 사용자가 있는지 확인
  // 그사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우에는 로그인도 되어 있어야하고, 어드민 권한도 가지고 있어야함
  // 조건에 맞지않으면 / 상위 경로로 이동
  // 조건에 맞는 경우에만 전달된 children을 보여줌 
  
    return (
    <div>ProtectedRoute</div>
  )
}
