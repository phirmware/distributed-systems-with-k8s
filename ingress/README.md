### Kubernetes Ingress

#### Using Contour ingress controller and envoy load balancer

- `kubectl apply -f https://j.hept.io/contour-deployment-rbac` - Create the ingress controller.

- `kubectl apply -f ./ingress.yaml` - Change the ingress rules on the yaml file to match your requirements.

- Check *Route 53*   to see if the record sets have been automatically created, if not create them manually using alias and select the load balancer.

- Run `kubectl get ingress` to view the load balancer under ADDRESS column.