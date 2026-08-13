# nginx가 설치된 가벼운 alpine 리눅스를 베이스 이미지로 사용
FROM nginx:alpine
# 현재 폴더의 모든 파일을 컨테이너 안 nginx 웹 루트로 복사
COPY . /usr/share/nginx/html
# 주소 끝이 /로 끝날 때 nginx가 찾는 이름은 index.html이므로
# 게시판 파일을 index.html 이름으로 한 번 더 복사하여 기본 환영 페이지를 덮어씀
COPY index1.html /usr/share/nginx/html/index.html
# 컨테이너가 80번 포트를 사용한다고 표시
EXPOSE 80
