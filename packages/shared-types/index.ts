export enum ClusterProvider {
  AWS = "EKS",
  AZURE = "AKS",
  GCP = "GKE",
  VMWARE = "TANZU",
  BAREMETAL = "K8S",
  EDGE = "K3S",
  OPENSHIFT = "OPENSHIFT"
}

export enum ClusterStatus {
  PROVISIONING = "PROVISIONING",
  ACTIVE = "ACTIVE",
  DEGRADED = "DEGRADED",
  ERROR = "ERROR",
  OFFLINE = "OFFLINE"
}

export interface KubernetesCluster {
  id: string;
  name: string;
  provider: ClusterProvider;
  region: string;
  version: string;
  status: ClusterStatus;
  endpoint: string;
  nodesCount: number;
  cpuCapacity: string;
  memoryCapacity: string;
  tags: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface Namespace {
  id: string;
  clusterId: string;
  name: string;
  owner: string;
  quota: {
    cpu: string;
    memory: string;
    storage: string;
  };
  status: string;
}

export interface Workload {
  id: string;
  clusterId: string;
  namespace: string;
  name: string;
  type: "DEPLOYMENT" | "STATEFULSET" | "DAEMONSET" | "JOB";
  replicas: number;
  image: string;
  status: string;
}

export interface PolicyViolation {
  id: string;
  clusterId: string;
  resourceType: string;
  resourceName: string;
  policyName: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  message: string;
  detectedAt: string;
}
