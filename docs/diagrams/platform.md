# Platform Engineering Diagrams

## 14. Namespace Lifecycle
*The self-service process for a developer to request and receive a namespace.*

```mermaid
graph TD
    Req[Developer Requests Namespace] --> Approval{Policy Check}
    Approval -- "Valid" --> Provision[Create Namespace + Quotas]
    Provision --> RBAC[Bind Team Roles]
    RBAC --> Network[Apply Default Network Policy]
    Network --> Ready[Notify Developer]
```

## 15. Golden Path Workflow
```mermaid
graph LR
    Template[Choose Template: Go/React/Java] --> Scaffolding[Create Git Repo]
    Scaffolding --> Pipeline[Setup CI/CD]
    Pipeline --> Cluster[Register with ArgoCD]
    Cluster --> Deploy[Initial Deployment]
```

## 16. Helm Release Flow
```mermaid
sequenceDiagram
    participant Helm[Helm CLI/Argo]
    participant Chart[Chart Repository]
    participant K8s[Kubernetes API]

    Helm->>Chart: Pull Chart
    Helm->>Helm: Template Rendering (with Values)
    Helm->>K8s: Apply Manifests
    K8s-->>Helm: Success
```

## 19. Cluster Upgrades (Blue/Green)
```mermaid
graph TD
    subgraph "Current State"
        V1[Cluster v1.27]
    end
    subgraph "Transition"
        V2[Cluster v1.28]
    end
    Workload[Workloads] -- "Traffic" --> V1
    Migrate[Migrate Workloads] --> V2
    Switch[Switch Ingress] --> V2
    V1 --> Decommission[Delete v1.27]
```
