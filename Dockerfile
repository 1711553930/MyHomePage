# Dockerfile

FROM nginx:alpine

# 删除默认页面内容
RUN rm -rf /usr/share/nginx/html/*

# 复制静态资源到容器中
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY img /usr/share/nginx/html/img

# 可选：创建用于上传的目录（如果你有上传功能）
RUN mkdir -p /usr/share/nginx/html/uploads