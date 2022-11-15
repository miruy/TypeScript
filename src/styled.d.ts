// declaration파일 : 선언파일, styled-components를 확장하고 이전에 설치해놓은 파일들을 override(덮어쓰기)하는 용도

import 'styled-components';

// DefaultTheme로 보여질 interface 정의
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}