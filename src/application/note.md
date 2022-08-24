Putting all logic in this layer will be more clear.
But I think putting logic and view in the same folder will make the scope of logic more clear:
    - useXXX.ts in presentation folder, means that it is only used by specific view
    - useXXX.ts in application folder, means that it is used by all views

