# Curiosity report - Docker
https://docs.google.com/document/d/1OLhX4mldmeCskHLat8uW91IpfuCGLYKir48lEZ_ziag/edit?usp=sharing

Docker Curiosity report:

I struggled to understand docker at first, and now that I am getting a better grasp on it, I want to know how it works under the hood, and important things for if I ever have to use it in the future. 

The basics:
Docker allows for containerization of applications into containers called images. This is created from a dockerfile. These can be then managed from a docker hub

Docker vs Virtual Machine

Feature
Docker
VM
Isolation
Shares OS kernel. * using container engine
Full OS boot install per VM. Has a hypervisor
Specs
No GUI, BIOS, or unnecessary process with dynamic resource allocation
Virtual BIOS, disk management, and device drivers. Fixes RAM and CPU
Performance
Faster ^
Slower ^
Size
~Mbs
~Gbs
Startup 
~Seconds
~Minutes 
Uses
Microservices
Running another computer


*Is linux based, so only native to linux, but hen it was ported to other OSes, docker will use lightweight VMs using something like Apple Hyperkit. Still faster than complete VM’s like VMware or virtualbox. 


Docker Compose
This allows for multiple images to be built, configured and connected at once inside a single yml (Yet another markup language, that's honestly a hilarious name) file. Allows for networks. 

Docker Swarm
Another feature build into docker to allow for larger management of containers. Has automatic load balancing, and multi-node cluster management, which essentially allows for multiple docker hosts to manage containers in one place.
Broken down into managerial nodes that control other nodes, and the worker nodes that are the ones that do all the work in containers.
Might work like the following 
docker swarm init --advertise-addr <MANAGER-IP>

Initialize a swarm
docker swarm join --token <TOKEN> <MANAGER-IP>:2377
Adding a worker
docker service create --name my_service -p 8080:80 --replicas 3 nginx
Deploying a service with 3 nginx containers
docker swarm leave --force
Tearing down the swarm

However, despite that, Kubernetes, or K8, is the industry standard and more powerful for swarm management. A table of why
Feature
Docker Swarm
Kubernetes K8
Ease of setup
Build in
More complex setup
Scalability
Limited
Highly scalable for commercial use
Self-healing /Automatic restarting failed containers
Limited
Yes
Networking
Simple built in
More advanced
Rolling updates
Supported
More advanced yet again
Load balancing
Simple built in
More advanced as always
Use case
Smaller-scale apps
Comercial / cloud apps
Support
No native hybrid support
Hybrid support with AWS, GCP, Azure and probably more


How a K8 application might function
Minikube start 
Start a cluster
kubectl create deployment my-app --image=nginx
Deploying an application
kubectl expose deployment my-app --type=LoadBalancer --port=80
Exposing the deployment as a service
kubectl scale deployment my-app --replicas=5
Scaling the application
kubectl delete deployment my-app
Deleting the application

Volumes
Volumes are also important as it allows data to be stored between container restarts and shared to other containers. Those use mount points? Found in three types, named, unnamed, and host volumes. First two are self explanatory but host volumes or bind mounts will read and write to data in the bound directory. If you have to store data inside containers, use volumes. 

Common Security Issues

Excessive privileges
Running containers as root can significantly increase the attack surface

Outdated images
Older images can have unpatched security flaws
Use newer images, and make sure to use newer versions of technologies in your own images

Secret Exposure
Using hardcoded API keys, passwords, or credentials inside the images can be leaked or exposed.

Unofficial Images
Unverified containers can contain malware that can cause problems. Don’t run them unless you trust them.
